import fs from 'fs';

/**
 * Loads JSON data from the specified file path.
 * 
 * @param {string} filePath - The relative or absolute path to the JSON file.
 * @returns {Object} - The parsed JSON data as a JavaScript object.
 */
export const loadJsonData = (filePath: string) => {
  try {
    const rawData = fs.readFileSync(filePath, 'utf-8');
    
    return JSON.parse(rawData);
  } catch (error) {
    console.error(`Error loading JSON data from ${filePath}:`, error);
    return null; // Return null in case of error
  }
};
