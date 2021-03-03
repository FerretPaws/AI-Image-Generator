  const deepai = require('deepai');
  const prompt = require('prompt');

  //For this to work properly, you will need an API key! You can get one here: https://deepai.org/

  deepai.setApiKey('');

  prompt.start();

  prompt.get(['object'], function(err, result) {
    if (err) { return onErr(err); }

    (async function() {
      var resp = await deepai.callStandardApi("text2img", {
        text: result.object,
      });

      console.log("\nImage: " + resp.output_url);

    })()
  });
