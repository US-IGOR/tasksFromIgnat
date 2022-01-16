import React, {ChangeEvent, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import {SuperRangeMui}  from "./common/c7-SuperRange/SuperRangeMui";
import {SuperDoubleRangeMui} from "./common/c8-SuperDoubleRange/SuperDoubleRangeMui";


function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState([0, 100])


    const onChangeRange = (value: number) => {
            setValue1(value)
            let dobleValue = [value, value2[1]]
            setValue2(dobleValue)
    }

    const onChangeArrayRange = (value: Array<number>) => {
        setValue1(value[0])
        let copy = value.map(m => m)
        setValue2(copy)




    }

    const handleChange = (event: Event, value: number | number[], activeThumb: number) => {

        typeof value == 'object' ?
            onChangeArrayRange(value.map(m => m))
            : value = 0;



    }


    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <div><span>{value1}</span></div>


                <SuperRange
                    onChangeRange={onChangeRange}
                    value={value1}

                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <div><span>{value1}</span></div>
                <SuperDoubleRange
                    onChangeRange={onChangeRange}
                    value={value1}


                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2[1]}</span>
            </div>
            <br/>
            <br/>
            <div>
                <SuperRangeMui
                    onChangeRange={onChangeRange}
                    value={value1}
                />


            </div>
            <div>
                <SuperDoubleRangeMui
                    onChangeRange={onChangeArrayRange}
                    value2={value2}
                    handleChange={handleChange}
                />


            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>


        </div>
    )
}

export default HW11
