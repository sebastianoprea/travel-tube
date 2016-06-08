# travel-tube-api
The REST APIs provide programmatic access to read and write Travel Tube data. 
App is deployed on Heroku: <a>https://api-traveltube.herokuapp.com</a>
<h3> Videos </h3>
<table class="demo">
	<caption>Overview of videos api </caption>
	<thead>
	<tr>
		<th>URL<br></th>
		<th>Method<br></th>
		<th>Parameters<br></th>
		<th>Description<br></th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>/videos</td>
		<td>&nbsp;POST</td>
		<td>Parameters<br></td>
		<td>Create a video<br></td>
	</tr>
	<tr>
		<td>/videos <br></td>
		<td>&nbsp;GET</td>
		<td>Parameters<br></td>
		<td>Fetch all videos from database<br></td>
	</tr>
	<tr>
		<td>/videos/:id&nbsp; <br></td>
		<td>&nbsp;GET<br></td>
		<td>Parameters</td>
		<td>Fetch video by id <br></td>
	</tr>
	<tr>
		<td>/videos/:id <br></td>
		<td>&nbsp;PUT</td>
		<td>Parameters<br></td>
		<td>Edit video details by id <br></td>
	</tr>
	</tbody>
</table>
<p>Video model example</p>
    {
      "_id": "57531f0ff6e9a2a02ee9cc5f",
      "title": "Casa Ponton Baraj",
      "description": "Casa Ponton Baraj, o experienta unica.",
      "locationX": "45°13'03.4\"",
      "locationY": "22°01'35.0",
      "created": "2016-06-04T18:33:51.542Z",
      "modified": "2016-06-04T18:38:13.637Z",
      "videoUrl": "https://www.youtube.com/watch?v=hiJXZAuLbec",
      "__v": 0,
      "thumbnails": [
        "http://s33.postimg.org/eyejyw567/121.png",
        "http://s33.postimg.org/oug3hwrvz/122.png",
        "http://s33.postimg.org/b3cjig0tr/123.png"
      ],
      "tags": [
        "Water",
        "Romania",
        "Music",
        "Party"
      ]
    }
