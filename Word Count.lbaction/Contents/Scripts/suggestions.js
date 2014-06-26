function wordcount(string)
{
	var words = string.split(/\s+/).length;
	return [
		{
			title: words + " Words",
		}, {
			title: string.length + " Characters",
		}
	];
}

function runWithString(string)
{
	return wordcount(string);
}
