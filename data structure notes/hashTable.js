// key => value lookup 

// hash tables give you a way of, given a key, associating a value with it for quick lookups

//Say you had the following data

"Al" => new Person (id = 179, address = "11 infinity rd")
"Bob" => new Person (id = 224, address = "23 home st")
"Chuck" => new Person (id = 663, address = "18 harding st")
"Lucy" => new Person (id = 347, address = "99 forever road")
"Rachel" => new Person (id = 896, address = "100 okay street")

//with hash tables you can simply do
hashtable.put("Mary", new Person(id = 347, address = "99 forever road"))
hashtable.get("Mary")

// the key and value in a hash table can be any data type, usually strings are used
// hash functions takes the string, converts it to an integer, and then makes the integer an index of that array
// 2 diff strings can have the same hash code, even if the string values arent the same
//and 2 things w diff hash codes can have the same index
// these are called collisions

// runtime is usually constant O(1)