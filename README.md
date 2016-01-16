# UberGuide-Server

common data

```
{
	status : 0|1|2,
	data : {},
	message : ''
}
```

## Preferences

** get preferences in this city **

** GET ** `/api/city/tags/:CITY_ID`

data:

```
[{
	_id : "",
	label : "",
	imageSrc : ""
}]
```

** POST ** `/api/city/tags/`

params: 

```
{
	tags : [_id, _id]
}
```

获取旅途名称

如有多个tags，显示“探索”
如果只有一个tag，显示 tag 的 label

## Places

** GET ** `/api/city/place/:CITY_ID`

```
{
	_id : "",
	name : "天安门",
	latitude : "5.4",
	longitude : "12.7",
	description : "天安门就是六四事件发生的地点",
	imageSrc : ""
}
```

** GET ** `/api/ride/place/:LONGITUDE/:LATITUDE`

longitude and latitude is your location 

```
{
	_id : "",
	name : "天安门",
	latitude : "5.4",
	longitude : "12.7",
	description : "天安门就是六四事件发生的地点",
	imageSrc : "",
	relativeLocation : {
		
	}
}
```