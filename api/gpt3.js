const { Hercai } = require('hercai');

exports.config = {
    name: 'gpt3',
    author: 'Joshua Apostol',
    description: 'chat with the Gpt3.5',
    method: 'get',
    category: 'ai',
    link: ['/gpt3?query=what+model+are+you?']
};

exports.initialize = async function ({ req, res }) {
    try {
        const query = req.query.query;
        if (!query) {
            return res.status(400).json({ error: "Add ?query=your_query_here" });
        }

        const herc = new Hercai();
        const response = await herc.question({ model: "turbo-16k", content: query });
        res.json({ response: response.reply });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch" });
    }
};