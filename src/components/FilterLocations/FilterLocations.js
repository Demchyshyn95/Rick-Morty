import {useForm} from "react-hook-form";
import s from "../FilterCharacters/filter.module.css"


const FilterLocations = ({ filter }) => {
    const { register, handleSubmit } = useForm();

    return (
        <div>
            <form
                id='form'
                onChange={ handleSubmit(filter) }>

                <div className="form-group w-auto">
                    <input type="text" className="form-control"
                           name='name' ref={ register }
                           aria-describedby="emailHelp"
                           placeholder="Enter episode name ..."/>
                </div>
                <div>
                    <label className={ s.label } htmlFor="type">
                        Type
                    </label>
                    <select
                        className={ s.select }
                        name="type"
                        id="type"
                        ref={register}
                        onChange={ handleSubmit(filter) }
                    >
                        <option value="all">All</option>
                        <option value="Planet">Planet</option>
                        <option value="Fantasy town">Fantasy town</option>
                        <option value="Dream">Dream</option>
                        <option value="Cluster">Cluster</option>
                        <option value="Space station">Space station</option>
                        <option value="unknown">Unknown</option>
                    </select>
                    <label className={s.label} htmlFor="dimension">
                        Dimension
                    </label>
                    <select
                        className={s.select}
                        name="dimension"
                        id="dimension"
                        ref={ register }
                        onChange={ handleSubmit(filter) }
                    >
                        <option value="all">All</option>
                        <option value="Dimension C-137">Dimension C-137</option>
                        <option value="Post-Apocalyptic Dimension">Post-Apocalyptic Dimension</option>
                        <option value="Cronenberg Dimension">Cronenberg Dimension</option>
                        <option value="Fantasy Dimension">Fantasy Dimension</option>
                        <option value="Replacement Dimension">Replacement Dimension</option>
                        <option value="Replacement Dimension">Replacement Dimension</option>
                        <option value="Dimension K-83">Dimension K-83</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default FilterLocations;
