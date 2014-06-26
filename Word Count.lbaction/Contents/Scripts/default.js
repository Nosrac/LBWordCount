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

// function run()
// {
//     // No argument passed, just open the website:
//     // LaunchBar.openURL('http://www.youtube.com/');
// }

function runWithString(argument)
{
	return wordcount(argument);
}

function runWithItem(item)
{
	return wordcount(item.title);
}