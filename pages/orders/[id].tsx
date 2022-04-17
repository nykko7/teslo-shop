import NextLink from 'next/link';

import { ShopLayout } from '../../components/layouts';
import { CartList, OrderSummary } from '../../components/cart';
import {
	Grid,
	Card,
	Link,
	Typography,
	CardContent,
	Divider,
	Box,
	Chip,
	Button,
} from '@mui/material';
import {
	CreditCardOffOutlined,
	CreditScoreOutlined,
} from '@mui/icons-material';

const OrderPage = () => {
	return (
		<ShopLayout
			title={`Resumen de la orden #${'123456'}`}
			pageDescription={'Resumen de la orden'}
		>
			<Typography variant='h1' component='h1'>
				{`Orden #${'123456'}`}
			</Typography>
			{/* <Chip
				sx={{ my: 2 }}
				label='Pendiente de pago'
				variant='outlined'
				color='error'
				icon={<CreditCardOffOutlined />}
			/> */}
			<Chip
				sx={{ my: 2 }}
				label='Orden ya fue pagada'
				variant='outlined'
				color='success'
				icon={<CreditScoreOutlined />}
			/>
			<Grid container>
				<Grid item xs={12} sm={7}>
					{/* CartList */}
					<CartList />
				</Grid>
				<Grid item xs={12} sm={5}>
					<Card className='summary-card'>
						<CardContent>
							<Typography>Resumen (3 productos)</Typography>
							<Divider sx={{ my: 1 }} />

							<Box display={'flex'} justifyContent='space-between'>
								<Typography variant='subtitle1'>
									Dirección de entrega
								</Typography>
								<NextLink href='/checkout/address' passHref>
									<Link underline='always'>Editar</Link>
								</NextLink>
							</Box>
							<Typography>Terry ble </Typography>
							<Typography>323 Some place</Typography>
							<Typography>Qwerty, Saint Lorem Ipsum</Typography>
							<Typography>+569 9988776655</Typography>

							<Divider sx={{ my: 1 }} />

							<Box display={'flex'} justifyContent='end'>
								<NextLink href='/cart' passHref>
									<Link underline='always'>Editar</Link>
								</NextLink>
							</Box>
							<OrderSummary />

							<Box sx={{ mt: 3 }}>
								{/* TODO */}
								<h1>Pagar</h1>
								<Chip
									sx={{ my: 2 }}
									label='Orden ya fue pagada'
									variant='outlined'
									color='success'
									icon={<CreditScoreOutlined />}
								/>
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</ShopLayout>
	);
};

export default OrderPage;
