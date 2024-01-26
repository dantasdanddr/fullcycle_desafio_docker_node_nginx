SET @tbl_exists = (
  SELECT COUNT(*)
  FROM information_schema.tables
  WHERE table_schema = 'nodedb'
    AND table_name = 'people'
);

SET @sql = IF(@tbl_exists = 0,
    'CREATE TABLE nodedb.people (
		  id int auto_increment NOT NULL,
		  name varchar(255) NULL,
		  CONSTRAINT people_PK PRIMARY KEY (id)
	  )',
    'SELECT "Table already exists"'
);

PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;
