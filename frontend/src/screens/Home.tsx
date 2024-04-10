import Sparkle1 from '../assets/images/sparkle1.gif'
import Sparkle2 from '../assets/images/sparkle2.gif'
import {ChangeEvent, useState} from 'react';
import {SearchLyric} from "../../wailsjs/go/main/App";

export const Home = () => {
    const [url, setUrl] = useState('')
    const [romaji, setRomaji] = useState('')
    const [original, setOriginal] = useState('')
    const [translation, setTranslation] = useState('')

    const updateUrl = (e: ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value)
    }

    const cleanLyrics = () => {
        setRomaji('')
        setOriginal('')
        setTranslation('')
    }

    const searchUrl = () => {
        url ?
            SearchLyric(url).then(res => {
                cleanLyrics();
                res.forEach((lyric, index) => {
                    switch (index) {
                        case 0:
                            setRomaji(lyric);
                            break;
                        case 1:
                            setOriginal(lyric);
                            break;
                        case 2:
                            setTranslation(lyric);
                            break;
                    }
                })
            }) : alert('Please enter a URL')
    }

    return (
        <div className='min-h-[100dvh] bg-neutral-900 w-full'>
            <div className='flex justify-around content-center items-center'>
                <img className='w-36' src={Sparkle1} alt='logo'/>
                <h1 className='text-6xl font-bold text-white underline'>Lyric Scraper</h1>
                <img className='w-36' src={Sparkle2} alt='logo'/>
            </div>
            <div className='h-2 border-b border-neutral-800'></div>
            <div className='flex flex-col gap-4 mt-6 mx-14'>
                <div>
                    <label htmlFor='url'
                           className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>URL</label>

                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="search"
                               className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="https://www.lyrical-nonsense.com/global/..." required
                               value={url}
                               onChange={updateUrl}/>
                        <button type="button"
                                className="text-white absolute end-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
                                onClick={searchUrl}>Search
                        </button>
                    </div>
                    <p className="mt-2 text-sm text-gray-200">URL of the Song you want to extract the lyrics of.</p>
                </div>
            </div>

            <div className='flex justify-around content-around mt-10 mx-14 gap-4'>
                <div className="flex flex-col gap-4 w-full">
                    <textarea id="romaji" rows={17}
                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              value={romaji}></textarea>
                    {/*<button*/}
                    {/*    className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'*/}
                    {/*    type='button'>*/}
                    {/*    Save*/}
                    {/*</button>*/}
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <textarea id="original" rows={17}
                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              value={original}></textarea>
                    {/*<button*/}
                    {/*    className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'*/}
                    {/*    type='button'>*/}
                    {/*    Save*/}
                    {/*</button>*/}
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <textarea id="translation" rows={17}
                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              value={translation}></textarea>
                    {/*<button*/}
                    {/*    className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'*/}
                    {/*    type='button'>*/}
                    {/*    Save*/}
                    {/*</button>*/}
                </div>
            </div>
        </div>
    );
};
