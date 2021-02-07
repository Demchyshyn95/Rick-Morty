import {useForm} from "react-hook-form";
import s from "./filter.module.css"


const FilterCharacters = ({filter}) => {
    const {register, handleSubmit, errors} = useForm();

    return (
        <form
            id='form'
            onChange={handleSubmit(filter)}>

            <div className="form-group">
                <input type="text" className="form-control"
                       name='name' ref={register}
                       aria-describedby="emailHelp"
                       placeholder="Enter a name characters..."/>
            </div>

            <div>
                <label className={s.label} htmlFor="status">
                    Status
                </label>
                <select
                    className={s.select}
                    name="status"
                    id="status"
                    ref={register}
                    onChange={handleSubmit(filter)}
                >
                    <option value="all">All</option>
                    <option value="Alive">Alive</option>
                    <option value="Dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>
                <label className={s.label} htmlFor="gender">
                    Gender
                </label>
                <select
                    className={s.select}
                    ref={register}
                    name="gender"
                    id="gender"
                    onChange={handleSubmit(filter)}
                >
                    <option value="all">All</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="unknown">Unknown</option>
                </select>
                <label className={s.label} htmlFor="species">
                    species
                </label>
                <select
                    className={s.select}
                    ref={register}
                    name="species"
                    id="species"
                    onChange={handleSubmit(filter)}
                >
                    <option value="all">All</option>
                    <option value="Human">Human</option>
                    <option value="Alien">Alien</option>
                    <option value="Humanoid">Humanoid</option>
                    <option value="Robot">Robot</option>
                    <option value="Poopybutthole">Poopybutthole</option>
                    <option value="Unknown">Unknown</option>
                </select>
            </div>
        </form>
    )
}

export default FilterCharacters;
