---
source: https://developers.google.com/apps-script/guides/jdbc
root: apps-script
fetched_at: 2026-04-23T15:18:22.676Z
---

# JDBC

## Page Summary

- Apps Script uses the JDBC service to connect to external databases, including Google Cloud SQL, MySQL, Microsoft SQL Server, and Oracle.
- Updating external databases with JDBC requires opening a connection and sending SQL statements.
- For Google Cloud SQL databases, the recommended connection method is `Jdbc.getCloudSqlConnection(url)`.
- To connect to other databases or Google Cloud SQL using `Jdbc.getConnection(url)`, you must authorize specific IP ranges in your database settings.
- JDBC connections close automatically when a script finishes, but can be closed manually with `close()` methods for connections, statements, or result sets.

Versions 1.0 and 1.1 of the TLS security protocol are disabled. To establish connections, use TLS 1.2 or higher.

Google Apps Script can connect to external databases through the [JDBC service](https://developers.google.com/apps-script/reference/jdbc), a wrapper around the standard [Java Database Connectivity technology](http://www.oracle.com/technetwork/java/javase/jdbc/index.html). The JDBC service supports Google Cloud SQL for MySQL, MySQL, Microsoft SQL Server, Oracle and PostgreSQL databases.

If your spreadsheet is growing too large or you're experiencing timeout issues with complex calculations, moving your data to an external database can significantly improve performance and reliability.

To update an external database with JDBC, your script must open a connection to the database and then make changes by sending SQL statements.

## Google Cloud SQL databases

[Google Cloud SQL](https://developers.google.com/sql) lets you create relational databases that live in Google's cloud. Cloud SQL might incur charges based on your usage.

Create a Google Cloud SQL instance by following the steps listed in the [Cloud SQL quickstart](https://developers.google.com/sql/docs/quickstart).

### Create Google Cloud SQL connections

There are two ways of establishing a connection with a Google Cloud SQL database using Apps Script's [JDBC service](https://developers.google.com/apps-script/reference/jdbc):

- (Recommended) Connecting using [Jdbc.getCloudSqlConnection](https://developers.google.com/apps-script/reference/jdbc/jdbc#getcloudsqlconnectionurl)
- Connecting using [Jdbc.getConnection](https://developers.google.com/apps-script/reference/jdbc/jdbc#getconnectionurl)

Both are valid, but the second method requires you to authorize a set of IP ranges for access to your database.

#### Use Jdbc.getCloudSqlConnection (recommended)

This method creates a connection to a Google Cloud SQL MySQL instance using the [Jdbc.getCloudSqlConnection](https://developers.google.com/apps-script/reference/jdbc/jdbc#getcloudsqlconnectionurl) method. The database URL has the form of `jdbc:google:mysql://subname`, where `subname` is the MySQL **Instance Connection Name** listed on the Cloud SQL instance **Overview** page in the [Google Cloud console](https://console.cloud.google.com/).

To connect to Cloud SQL SQL Server, see [Jdbc.getConnection](https://developers.google.com/apps-script/reference/jdbc/jdbc#getconnectionurl).

#### Use Jdbc.getConnection

In order to use this method, you must authorize certain [Classless Inter-Domain Routing (CIDR)](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) IP address ranges so that Apps Script's servers can connect to your database. Before running your script, complete the following steps:

1. In your Google Cloud SQL instance, [authorize the IP ranges](https://cloud.google.com/sql/docs/mysql/configure-ip#add), one at at time from this [data source](https://www.gstatic.com/ipranges/goog_ipv4_only.txt).
2. Copy the URL that was assigned to your database; it should have the form `jdbc:mysql:subname`.

Once you've authorized these IP ranges, create connections to your Google Cloud SQL instance using one of the [Jdbc.getConnection](https://developers.google.com/apps-script/reference/jdbc/jdbc#getconnectionurl) methods and the URL you copied earlier.

## Other databases

If you already have your own MySQL, Microsoft SQL Server, Oracle or PostgreSQL database, connect to it through Apps Script's JDBC service.

### Create other database connections

In order to create a database connection using the Apps Script [JDBC service](https://developers.google.com/apps-script/reference/jdbc), in your database settings you must authorize IP ranges from [this data source](https://www.gstatic.com/ipranges/goog.json).

The JDBC service can only connect to ports 1025 or later. Ensure your database is not serving off a lower port.

Once these allowlists are in place, create a connection to the database using one of the [Jdbc.getConnection](https://developers.google.com/apps-script/reference/jdbc/jdbc#getconnectionurl) methods and your database's URL.

## Sample code

The following sample code assumes you are connecting to a Google Cloud SQL database, and creates database connections using the [Jdbc.getCloudSqlConnection](https://developers.google.com/apps-script/reference/jdbc/jdbc#getcloudsqlconnectionurl) method. For other databases you must use the [Jdbc.getConnection](https://developers.google.com/apps-script/reference/jdbc/jdbc#getconnectionurl) method to create database connections.

For more information on the JDBC methods, see the [Java documentation for JDBC](http://docs.oracle.com/javase/7/docs/api/java/sql/package-summary.html).

### Create a database, user, and table

Most developers use the [MySQL command-line tool](http://dev.mysql.com/doc/refman/5.5/en/mysql.html) to create databases, users, and tables. However, it's possible to do the same thing in Apps Script, as shown in the following example. Create at least one other user so that your script doesn't always have to connect to the database as `root`.

```
/**
 * Create a new database within a Cloud SQL instance.
 */
function createDatabase() {
  try {
    const conn = Jdbc.getCloudSqlConnection(instanceUrl, root, rootPwd);
    conn.createStatement().execute(\`CREATE DATABASE ${db}\`);
  } catch (err) {
    // TODO(developer) - Handle exception from the API
    console.log("Failed with an error %s", err.message);
  }
}

/**
 * Create a new user for your database with full privileges.
 */
function createUser() {
  try {
    const conn = Jdbc.getCloudSqlConnection(dbUrl, root, rootPwd);

    const stmt = conn.prepareStatement("CREATE USER ? IDENTIFIED BY ?");
    stmt.setString(1, user);
    stmt.setString(2, userPwd);
    stmt.execute();

    conn.createStatement().execute(\`GRANT ALL ON \\`%\\`.* TO ${user}\`);
  } catch (err) {
    // TODO(developer) - Handle exception from the API
    console.log("Failed with an error %s", err.message);
  }
}

/**
 * Create a new table in the database.
 */
function createTable() {
  try {
    const conn = Jdbc.getCloudSqlConnection(dbUrl, user, userPwd);
    conn
      .createStatement()
      .execute(
        "CREATE TABLE entries " +
          "(guestName VARCHAR(255), content VARCHAR(255), " +
          "entryID INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(entryID));",
      );
  } catch (err) {
    // TODO(developer) - Handle exception from the API
    console.log("Failed with an error %s", err.message);
  }
}
```

### Write to the database

The following examples demonstrate how to write a single record to the database as well as a batch of 500 records. Batching is vital for bulk operations.

Parameterized statements are used, in which the variables are denoted by `?`. To prevent [SQL injection attacks](https://en.wikipedia.org/wiki/SQL_injection), use parameterized statements to escape all user-supplied data.

```
/**
 * Write one row of data to a table.
 */
function writeOneRecord() {
  try {
    const conn = Jdbc.getCloudSqlConnection(dbUrl, user, userPwd);

    const stmt = conn.prepareStatement(
      "INSERT INTO entries " + "(guestName, content) values (?, ?)",
    );
    stmt.setString(1, "First Guest");
    stmt.setString(2, "Hello, world");
    stmt.execute();
  } catch (err) {
    // TODO(developer) - Handle exception from the API
    console.log("Failed with an error %s", err.message);
  }
}

/**
 * Write 500 rows of data to a table in a single batch.
 */
function writeManyRecords() {
  try {
    const conn = Jdbc.getCloudSqlConnection(dbUrl, user, userPwd);
    conn.setAutoCommit(false);

    const start = new Date();
    const stmt = conn.prepareStatement(
      "INSERT INTO entries " + "(guestName, content) values (?, ?)",
    );
    for (let i = 0; i < 500; i++) {
      stmt.setString(1, \`Name ${i}\`);
      stmt.setString(2, \`Hello, world ${i}\`);
      stmt.addBatch();
    }

    const batch = stmt.executeBatch();
    conn.commit();
    conn.close();

    const end = new Date();
    console.log("Time elapsed: %sms for %s rows.", end - start, batch.length);
  } catch (err) {
    // TODO(developer) - Handle exception from the API
    console.log("Failed with an error %s", err.message);
  }
}

/**
 * Write 500 rows of data to a table in a single batch.
 * Recommended for faster writes
 */
function writeManyRecordsUsingExecuteBatch() {
  try {
    const conn = Jdbc.getCloudSqlConnection(dbUrl, user, userPwd);
    conn.setAutoCommit(false);

    const start = new Date();
    const stmt = conn.prepareStatement(
      "INSERT INTO entries " + "(guestName, content) values (?, ?)",
    );
    const params = [];
    for (let i = 0; i < 500; i++) {
      params.push([\`Name ${i}\`, \`Hello, world ${i}\`]);
    }

    const batch = stmt.executeBatch(params);
    conn.commit();
    conn.close();

    const end = new Date();
    console.log("Time elapsed: %sms for %s rows.", end - start, batch.length);
  } catch (err) {
    // TODO(developer) - Handle exception from the API
    console.log("Failed with an error %s", err.message);
  }
}
```

### Read from the database

This example demonstrates how to read a large number of records from the database, looping over the result set as necessary.

```
/**
 * Read up to 1000 rows of data from the table and log them.
 */
function readFromTable() {
  try {
    const conn = Jdbc.getCloudSqlConnection(dbUrl, user, userPwd);
    const start = new Date();
    const stmt = conn.createStatement();
    stmt.setMaxRows(1000);
    const results = stmt.executeQuery("SELECT * FROM entries");
    const numCols = results.getMetaData().getColumnCount();

    while (results.next()) {
      let rowString = "";
      for (let col = 0; col < numCols; col++) {
        rowString += \`${results.getString(col + 1)}\t\`;
      }
      console.log(rowString);
    }

    results.close();
    stmt.close();

    const end = new Date();
    console.log("Time elapsed: %sms", end - start);
  } catch (err) {
    // TODO(developer) - Handle exception from the API
    console.log("Failed with an error %s", err.message);
  }
}

/**
 * Read up to 1000 rows of data from the table and log them.
 * Recommended for faster reads
 */
function readFromTableUsingGetRows() {
  try {
    const conn = Jdbc.getCloudSqlConnection(dbUrl, user, userPwd);
    const start = new Date();
    const stmt = conn.createStatement();
    stmt.setMaxRows(1000);
    const results = stmt.executeQuery("SELECT * FROM entries");
    const numCols = results.getMetaData().getColumnCount();
    const getRowArgs = [];
    for (let col = 0; col < numCols; col++) {
      getRowArgs.push(\`getString(${col + 1})\`);
    }
    const rows = results.getRows(getRowArgs.join(","));
    for (let i = 0; i < rows.length; i++) {
      console.log(rows[i].join("\t"));
    }

    results.close();
    stmt.close();

    const end = new Date();
    console.log("Time elapsed: %sms", end - start);
  } catch (err) {
    // TODO(developer) - Handle exception from the API
    console.log("Failed with an error %s", err.message);
  }
}
```

## Close connections

JDBC connections close automatically when a script finishes executing. (Single [`google.script.run`](https://developers.google.com/apps-script/guides/html/communication) calls count as a complete execution, even if the HTML service page that made the call remains open.)

Nonetheless, if you know you're done with a connection, statement, or result set before the end of the script, close them manually by calling [`JdbcConnection.close`](https://developers.google.com/apps-script/reference/jdbc/jdbc-connection#close\(\)), [`JdbcStatement.close`](https://developers.google.com/apps-script/reference/jdbc/jdbc-statement#close\(\)), or [`JdbcResultSet.close`](https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set#close\(\)).

Showing an [alert or prompt dialog](https://developers.google.com/apps-script/guides/dialogs#alert_dialogs) also terminates any open JDBC connections. However, other showing UI elements —like custom menus or dialogs and sidebars with custom content —does not.

*Google, Google Workspace, and related marks and logos are trademarks of Google LLC. All other company and product names are trademarks of the companies with which they are associated.*
