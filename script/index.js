/* eslint-disable no-console */
import scriptConfig from './script.config.js';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function fetchAndStoreJson(targetDir, fileName, url) {
  try {
    console.log(`Fetching from ${url}...`);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    console.log('Fetch successful.');

    if (!fs.existsSync(targetDir)) {
      console.log(`Creating directory: ${targetDir}`);
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const targetFile = path.join(targetDir, fileName);
    console.log(`Writing data to ${targetFile}...`);
    fs.writeFileSync(targetFile, JSON.stringify(data, null, 2));
    console.log('Successfully wrote data!');
  } catch (error) {
    console.error('An error occurred:');
    console.error(error);
    process.exit(1);
  }
}

const fetchEulerTokenList = async () => {
  for (const chainId in scriptConfig) {
    const config = scriptConfig[chainId];
    if (!config || !config.eulerTokenListUrl) {
      return;
      console.error(
        `Error: No 'eulerTokenListUrl' found in config for chain ID ${chainId}`
      );
      process.exit(1);
    }
    const { eulerTokenListUrl } = config;
    const targetDir = path.join(__dirname, `../src/lib/data/vaults/${chainId}`);
    await fetchAndStoreJson(
      targetDir,
      'euler-token-list.json',
      eulerTokenListUrl
    );
  }
};

export const fetchEulerVaultInfoList = async () => {
  for (const chainId in scriptConfig) {
    const config = scriptConfig[chainId];
    if (!config || !config.eulerVaultInfoUrl) {
      return;
      console.error(
        `Error: No 'eulerVaultInfoUrl' found in config for chain ID ${chainId}`
      );
      process.exit(1);
    }
    const { eulerVaultInfoUrl } = config;
    const targetDir = path.join(__dirname, `../src/lib/data/vaults/${chainId}`);
    await fetchAndStoreJson(
      targetDir,
      'euler-vault-info-list.json',
      eulerVaultInfoUrl
    );
  }
};

(async () => {
  await fetchEulerTokenList();
  await fetchEulerVaultInfoList();
})();
