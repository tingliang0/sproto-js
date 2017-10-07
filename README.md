# sprotojs

#支持integer(2)这种小数类型  
#支持binary类型  
#有限支持64 bit integer, 由于javascript只有52位实际有效位, 且位移操作只在32bit上有效, 32位整型有效, 52位整型可能会有问题  
#支持解析*Array(id),但由于javascript没有Map类型,如果是map类型的结构体数据,会被解析成数组类型  
