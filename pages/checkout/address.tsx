import { ShopLayout } from '../../components/layouts';
import {
	Typography,
	Grid,
	TextField,
	MenuItem,
	FormControl,
	InputLabel,
	Select,
	Button,
	Box,
} from '@mui/material';

const AddressPage = () => {
	return (
		<ShopLayout
			title={'Direccion'}
			pageDescription={'Confirmar dirección del destino'}
		>
			<Typography variant='h1' component='h1'>
				Dirección
			</Typography>

			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<TextField label='Nombre' variant='outlined' fullWidth></TextField>
				</Grid>

				<Grid item xs={12} sm={6}>
					<TextField label='Apellido' variant='outlined' fullWidth></TextField>
				</Grid>

				<Grid item xs={12} sm={6}>
					<TextField label='Dirección' variant='outlined' fullWidth></TextField>
				</Grid>

				<Grid item xs={12} sm={6}>
					<TextField
						label='Dirección 2 (opcional)'
						variant='outlined'
						fullWidth
					></TextField>
				</Grid>

				<Grid item xs={12} sm={6}>
					<TextField
						label='Código Postal'
						variant='outlined'
						fullWidth
					></TextField>
				</Grid>

				<Grid item xs={12} sm={6}>
					<TextField label='Ciudad' variant='outlined' fullWidth></TextField>
				</Grid>

				<Grid item xs={12} sm={6}>
					<FormControl fullWidth>
						<InputLabel>Pais</InputLabel>
						<Select variant='outlined' label='País' value={1}>
							<MenuItem value={1}>Argentina</MenuItem>
							<MenuItem value={2}>Chile</MenuItem>
							<MenuItem value={3}>México</MenuItem>
							<MenuItem value={4}>Brasil</MenuItem>
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={12} sm={6}>
					<TextField label='Teléfono' variant='outlined' fullWidth></TextField>
				</Grid>
			</Grid>

			<Box sx={{ mt: 5 }} display='flex' justifyContent={'center'}>
				<Button color='secondary' className='circular-btn' size='large'>
					Revisar pedido
				</Button>
			</Box>
		</ShopLayout>
	);
};

export default AddressPage;
