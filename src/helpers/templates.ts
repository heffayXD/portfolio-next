import ejs from 'ejs'
import path from 'path'
import { fileURLToPath } from 'url'

/**
 * Retrieves a template
 * @param {string} dir @param {string} fileName @param {object} props
 * @return {Promise}
 */
export const getTemplate = (dir: string, fileName: string, props = {}): Promise<string> => {
  return new Promise(resolve => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const location = path.resolve(__dirname, '..', 'templates', dir, `${fileName}.ejs`)
    ejs.renderFile(location, props, (err, data) => {
      if (err) {
        console.error(err)
        return resolve('')
      }

      resolve(data)
    })
  })
}
