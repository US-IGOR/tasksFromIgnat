import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange: (value: Array<number>) => void
    value2: Array<number>
    handleChange: any
};

function valuetext(value: number) {
    return `${value}°C`;
}


export const SuperDoubleRangeMui: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className,
        value2,
        handleChange,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {



    return (
        <Box sx={{width: 300}}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value2}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
        </Box>
    );
}




//  const [value, setValueMui] = React.useState<number[]>(value2);




/*
let whichTotalValue = newValue as number[]
whichTotalValue[0] = valueTotal

        setValueMui(newValue as number[]);
        console.log(whichTotalValue)



    */

/*
    const onChangeCallbackMui = (e: any) => {    //Event  |   ChangeEvent<HTMLInputElement>

        onChangeRange && onChangeRange(Number(e.target.value))
    }*/