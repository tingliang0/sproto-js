sprotojs
=======
use sproto in javascript, you can find example in test.js


Support Types
=======

* **string** : string
* **binary** : binary string (it's a sub type of string)
* **integer** : integer, the max length of an integer is signed 64bit. It can be a fixed-point number with specified precision.
* **double** : double precision floating-point number, satisfy [the IEEE 754 standard](https://en.wikipedia.org/wiki/Double-precision_floating-point_format).
* **boolean** : true or false


```
# This is a comment.

.Person {	# . means a user defined type 
    name 0 : string	# string is a build-in type.
    id 1 : integer
    email 2 : string

    .PhoneNumber {	# user defined type can be nest.
        number 0 : string
        type 1 : integer
    }

    phone 3 : *PhoneNumber	# *PhoneNumber means an array of PhoneNumber.
    height 4 : integer(2)	# (2) means a 1/100 fixed-point number.
    data 5 : binary		# Some binary data
    weight 6 : double   # floating number
}

.AddressBook {
    person 0 : *Person(id)	# (id) is optional, means Person.id is main index.
}

foobar 1 {	# define a new protocol (for RPC used) with tag 1
    request Person	# Associate the type Person with foobar.request
    response {	# define the foobar.response type
        ok 0 : boolean
    }
}

```

#### spb 文件生成工具
[sprototool](https://github.com/zhangshiqian1214/sprototool.git) 

[spbtool](https://github.com/zhangshiqian1214/spbtool.git)
 

