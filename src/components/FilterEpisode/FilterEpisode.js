import {useForm} from "react-hook-form";
import s from '../FilterCharacters/filter.module.css'


const FilterEpisode = ({ filter }) => {
    const {register, handleSubmit, errors} = useForm();

    return (
            <form
                className="w-auto ml-20" id='form'
                onChange={handleSubmit(filter)}>

                <div className="form-group w-50">
                    <input type="text" className="form-control"
                           name='name' ref={register}
                           aria-describedby="emailHelp"
                           placeholder="Enter episode name ..."/>
                </div>
                <div className="form-group w-25 align-content-center">
                    <input type="text" className="form-control"
                           name='episode' ref={register}
                           aria-describedby="emailHelp"
                           placeholder="Enter your episode ..."/>
                </div>
            </form>
    )
}

export default FilterEpisode;
