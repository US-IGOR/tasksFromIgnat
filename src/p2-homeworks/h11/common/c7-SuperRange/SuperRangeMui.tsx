import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {log} from "util";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
    value: number
};

export const SuperRangeMui: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className,
        value,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {


    const onChangeCallbackMui = (e: any) => {    //Event  |   ChangeEvent<HTMLInputElement>

        onChangeRange && onChangeRange(Number(e.target.value))
    }


    return (
        <>

            <Box width={300}>

                <Slider defaultValue={value}
                        aria-label="Default"
                        valueLabelDisplay="auto"
                        onChange={onChangeCallbackMui}
                        value={value}
                />
            </Box>


        </>
    )
}
