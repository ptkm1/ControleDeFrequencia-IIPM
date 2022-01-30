import MaterialTable from 'material-table';
import { LayoutOne } from 'Presentation/Layouts/Layout1';
import useFrequencia from './functions';


function FrequenciaScreen() {

    const { frequencia, handleAddUser, handleDeleteUser, handleUpdateUser, columns } = useFrequencia()

    return (
        <MaterialTable
            data={frequencia}
            columns={columns}
            title="Frequencia"
            editable={{
                onRowAdd: handleAddUser,
                onRowDelete: handleDeleteUser,
                onRowUpdate: handleUpdateUser
            }}
            options={{
                actionsColumnIndex: -1, addRowPosition: "first"
            }}
        />
    )
}

export default FrequenciaScreen;