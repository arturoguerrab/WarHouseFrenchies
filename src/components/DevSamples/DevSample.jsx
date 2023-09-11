import React from 'react'
import { useTranslation } from 'react-i18next'

const DevSample = ({name}) => {
    const [t] = useTranslation('global')

    return (
        <div className="h-screen w-screen flex justify-center items-center bg-blue-gray-600 font-bold text-4xl text-white"> {t('dev.view')} - {name} </div>
    )
}

export default DevSample