import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
    valueTotal: number
};

function valuetext(value: number) {
    return `${value}°C`;
}


export const RangeSlider: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className,
        valueTotal,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {

    const [value, setValueMui] = React.useState<number[]>([valueTotal, 37]);

    const handleChange = (event: Event, newValue: number | number[]) => {


let whichTotalValue = newValue as number[]
whichTotalValue[0] = valueTotal

        setValueMui(newValue as number[]);
        console.log(whichTotalValue)



    }







    const onChangeCallbackMui = (e: any) => {    //Event  |   ChangeEvent<HTMLInputElement>

        onChangeRange && onChangeRange(Number(e.target.value))
    }

    return (
        <Box sx={{width: 300}}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
        </Box>
    );
}
