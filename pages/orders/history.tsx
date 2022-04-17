import NextLink from 'next/link';

import { ShopLayout } from '../../components/layouts';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Typography, Grid, Chip, Button, Link } from '@mui/material';

const columns: GridColDef[] = [
	{ field: 'id', headerName: 'ID', width: 100 },
	{ field: 'fullname', headerName: 'Nombre Completo', width: 300 },

	{
		field: 'paid',
		headerName: 'Pagada',
		width: 200,
		description: 'Muestra si la orden esta pagada o no',
		renderCell: (params: GridValueGetterParams) => {
			return params.row.paid ? (
				<Chip color='success' label='Pagada' variant='outlined' />
			) : (
				<Chip color='error' label='No pagada' variant='outlined' />
			);
		},
	},
	{
		field: 'order',
		headerName: 'Ver orden',
		width: 200,
		renderCell: (params: GridValueGetterParams) => {
			return (
				<NextLink href={`/orders/${params.row.id}`} passHref>
					<Link underline='always'>Ver orden</Link>
				</NextLink>
			);
		},
		sortable: false,
	},
];

const rows = [
	{ id: 1, paid: true, fullname: 'John Doe' },
	{ id: 2, paid: false, fullname: 'John Doe' },
	{ id: 3, paid: true, fullname: 'John Doe' },
	{ id: 4, paid: false, fullname: 'John Doe' },
	{ id: 5, paid: false, fullname: 'John Doe' },
	{ id: 6, paid: true, fullname: 'John Doe' },
];

const HistoryPage = () => {
	return (
		<ShopLayout
			title={'Historial de ordenes'}
			pageDescription={'Historial de ordenes del cliente'}
		>
			<Typography variant='h1' component='h1'>
				Historial de ordenes
			</Typography>

			<Grid container>
				<Grid item xs={12} sx={{ height: 600, width: '100%' }}>
					<DataGrid
						rows={rows}
						columns={columns}
						pageSize={10}
						rowsPerPageOptions={[10]}
						disableSelectionOnClick={true}
					/>
				</Grid>
			</Grid>
		</ShopLayout>
	);
};

export default HistoryPage;
