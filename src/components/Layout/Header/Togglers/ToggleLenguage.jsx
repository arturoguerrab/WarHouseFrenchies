import React, { useState } from 'react'
import TranslateIcon from '@mui/icons-material/Translate';
import ToggleButton from '@mui/material/ToggleButton';
import { useTranslation } from 'react-i18next';


const ToggleLenguage = () => {
    const [selected, setSelected] = useState(false);
    const [t,i18n] = useTranslation('global')

    return (
        <ToggleButton
            size='small'
            value="check"
            selected={selected}
            onChange={() => {
            setSelected(!selected);
            selected==false ? i18n.changeLanguage('es') :i18n.changeLanguage('en')
            }}
        >
            <TranslateIcon fontSize='small'/>
            {selected==false ?'us':'es'}

        </ToggleButton>
    );
}

export default ToggleLenguage