// auction_ai_backend/index.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));

app.post('/generate-auction-listing', async (req, res) => {
    const { image, itemDescription, ...meta } = req.body;

    try {
        const messages = [
            {
                role: 'system',
                content: `You are a world-class auction cataloguer. Generate a markdown auction listing for an item based on provided image and description. Include title, category, dimensions, provenance, estimate, auction date, buyer's premium, shipping, and persuasive copy.`
            },
            {
                role: 'user',
                content: [
                    {
                        type: 'image_url',
                        image_url: {
                            url: `data:image/jpeg;base64,${image}`
                        }
                    },
                    {
                        type: 'text',
                        text: `Description: ${itemDescription}\n\nMetadata: ${JSON.stringify(meta, null, 2)}`
                    }
                ]
            }
        ];

        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-4o',
                messages,
                max_tokens: 1200
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        res.json({ markdown: response.data.choices[0].message.content });
    } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to generate auction listing.' });
    }
});

app.listen(PORT, () => {
    console.log(`Auction AI backend running on http://localhost:${PORT}`);
});
