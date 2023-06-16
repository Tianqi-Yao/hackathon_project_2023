import axios from 'axios';
// import { PlaywrightWebBaseLoader } from "langchain/document_loaders/web/playwright";



function Test(props) {

    const handleTestBtn = () => {
        console.log("Test button clicked");

        let content = "Which of the following are dishes? \n";

        let rawdata = require('./d.json');
        content += rawdata.content;
        console.log("content: ", content.slice(0, 100));

        // rapidApiFunction(content.slice(0, 1000))
        // loadDataFromWeb()
    }

    // const loadDataFromWeb = async () => {
    //     const loader = new PlaywrightWebBaseLoader("https://www.tabnews.com.br/");

    //     const docs = await loader.load();
    //     console.log(docs);
    // }

    const rapidApiFunction = async (content) => {
        const options = {
            method: 'POST',
            url: 'https://openai80.p.rapidapi.com/chat/completions',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '62dcf4eee1mshf297d936448fd63p1e19fdjsn0db61a11cfb9',
                'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
            },
            data: {
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'user',
                        content: content
                    }
                ]
            }
        };

        try {
            const response = await axios.request(options);
            console.log("rapidApiFunction: ", response.data);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="Test">
            <h1>Test</h1>
            <p>Count: {props.count}</p>
            <button type="button" className="btn btn-primary" onClick={handleTestBtn}>Primary Test</button>
        </div>
    );
}

export default Test;