import axios from 'axios';

const API_BASE = 'https://api.crowdin.com/api/v2';
const TOKEN = process.env.CROWDIN_API_TOKEN;
const PROJECT_ID = process.env.CROWDIN_PROJECT_ID;

export const fetchCrowdinTranslation = async (lang: string | undefined, namespace: string | undefined) => {
    try {
        const headers = {
            Authorization: `Bearer ${TOKEN}`,
        };

        // Step 1: Get list of files
        const filesRes = await axios.get(`${API_BASE}/projects/${PROJECT_ID}/files`, { headers });
        const file = filesRes.data.data.find((f: any) => f.data.name === `${namespace}.json`);

        if (!file) {
            console.warn(`[Crowdin] No translation file found for namespace: ${namespace}`);
            return
        }

        // Step 2: Build the translation
        const buildRes = await axios.post(
            `${API_BASE}/projects/${PROJECT_ID}/translations/builds/files/${file.data.id}`,
            { targetLanguageId: lang },
            { headers }
        );

        // Step 3: Download the built translation file
        const downloadUrl = buildRes.data.data.url;
        const downloadRes = await axios.get(downloadUrl);

        return downloadRes.data;
    } catch (err) {
        // @ts-ignore
        console.error('[Crowdin fetch error]', err.message);
        return {};
    }
};
