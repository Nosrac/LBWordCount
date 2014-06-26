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