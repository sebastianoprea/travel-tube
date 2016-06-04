# travel-tube-api
The REST APIs provide programmatic access to read and write Travel Tube data. 
<br>
<h3> Videos </h3>
<style>
	.demo {
		border:1px solid #C0C0C0;
		border-collapse:collapse;
		padding:5px;
	}
	.demo th {
		border:1px solid #C0C0C0;
		padding:5px;
		background:#F0F0F0;
	}
	.demo td {
		border:1px solid #C0C0C0;
		text-align:left;
		padding:5px;
	}
</style>

<table class="demo">
	<caption>&nbsp;&nbsp;&nbsp;&nbsp;Overview of videos api </caption>
	<thead>
	<tr>
		<th>URL<br></th>
		<th>Method<br></th>
		<th>Description<br></th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>/videos</td>
		<td>&nbsp;POST</td>
		<td>Create a video<br></td>
	</tr>
	<tr>
		<td>/videos <br></td>
		<td>&nbsp;GET</td>
		<td>Fetch all videos from database<br></td>
	</tr>
	<tr>
		<td>/videos/:id&nbsp; <br></td>
		<td>&nbsp;GET<br></td>
		<td>Fetch video by id <br></td>
	</tr>
	<tr>
		<td>/videos/:id <br></td>
		<td>&nbsp;PUT</td>
		<td>Edit video details by id <br></td>
	</tr>
	</tbody>
</table>
