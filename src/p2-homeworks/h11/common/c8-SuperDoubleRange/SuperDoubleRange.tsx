import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
/*import s from "../c7-SuperRange/SuperRange.module.css";*/
import s from '../c7-SuperRange/SuperRange.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange2?: (value: any) => void
    //value?: [any]
    vaue?:number
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange2, value,
        // min, max, step, disable, ...
        onChange,
        className,
...restProps
    }
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e) // сохраняем старую функциональность

        onChangeRange2 && onChangeRange2(+e.currentTarget.value )


    }

    const finalRangeClassName = `${s.range} ${className ? className : ''}`

    // сделать самому, можно подключать библиотеки

    return (
        <>
            <>
                <input
                    value={value}
                    type={'range'}
                    onChange={onChangeCallback}
                    className={finalRangeClassName}


                    {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
                />


            </>
        </>
    )
}

export default SuperDoubleRange
