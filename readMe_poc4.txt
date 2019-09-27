Array Filters

	limitTo:qty:start //used in pagination e.q. {{item in artists | limitTo:4:1}} it will show 4 items starting from second item.  
	filter:keyword // used for searching. e.g. {{item in artists | filter:name}} it will filter item by name.
	orderBy:key:reverse  //used for sorting. e.g. {{item in artist | orderBy:name}} it will show item in ascending order by name.

