require("@tensorflow/tfjs");
const use = require("@tensorflow-models/universal-sentence-encoder");

// Calculate the dot product of two vector arrays.
const dotProduct = (xs, ys) => {
    const sum = (xs) => (xs ? xs.reduce((a, b) => a + b, 0) : undefined);

    return xs.length === ys.length
        ? sum(zipWith((a, b) => a * b, xs, ys))
        : undefined;
};

// zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
const zipWith = (f, xs, ys) => {
    const ny = ys.length;
    return (xs.length <= ny ? xs : xs.slice(0, ny)).map((x, i) => f(x, ys[i]));
};

const getAIScore = async (prompt, keyAttrList) => {
    const model = await use.loadQnA();
    // Embed an array of sentences.
    const input = {
        queries: [prompt],
        responses: keyAttrList
    };
    var scores = [];
    console.log("input: ", input);
    const embeddings = model.embed(input);

    const embed_query = embeddings["queryEmbedding"].arraySync();
    const embed_responses = embeddings["responseEmbedding"].arraySync();
    // compute the dotProduct of each query and response pair.
    for (let i = 0; i < input["queries"].length; i++) {
        for (let j = 0; j < input["responses"].length; j++) {
            scores.push(dotProduct(embed_query[i], embed_responses[j]));
        }
    }
    console.log("score: ", scores);
    return scores
}

module.exports = {
    getAIScore
}