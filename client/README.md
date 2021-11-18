# Getting Started with Create React App

## mySQL ID Number Auto increment again again start serial

- SET @num :=0;

- UPDATE property_list SET id = @num := (@num+1);

- ALTER TABLE property_list AUTO_INCREMENT = 1;
