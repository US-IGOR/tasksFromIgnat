import React, {ChangeEvent, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import SuperRangeMui from "./common/c7-SuperRange/SuperRangeMui";
import {RangeSlider} from "./common/c8-SuperDoubleRange/SuperDoubleRangeMui";

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)


    const onChangeRange = (value: number) => {
        setValue1(value)
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
                <span>{value2}</span>
            </div>
            <br/>
            <br/>
            <div >
                <SuperRangeMui
                    onChangeRange={onChangeRange}
                    value={value1}
                />


            </div>
            <div >
                <RangeSlider
                   onChangeRange={onChangeRange}
                   valueTotal={value1}
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
