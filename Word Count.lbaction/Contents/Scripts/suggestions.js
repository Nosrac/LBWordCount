function wordcount(string)
{
	var words = string.split(/\s+/).length;
	var lines = string.split(/\n/).length;

	var results = [
		{
			title: words + " Words",
		}, {
			title: string.length + " Characters",
		}
	];

	if (lines > 1)
	{
		results.push({ title: lines + " Lines" });
	}

	return results;
}

function runWithString(string)
{
	return wordcount(string);
}
