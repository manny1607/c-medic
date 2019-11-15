<template>
	<v-app>
		<v-container
			class="fill-height">
			<v-row
				justify="center">
				<v-col
					cols="12"
					md="6"
					sm="6">
					<h1>C-Medic</h1>
					<v-card>
						<v-app-bar
							dense
							color="primary"
							flat="flat"
							dark>
							<v-toolbar-title color="white">Iniciar Sesión</v-toolbar-title>
						</v-app-bar>
						<v-card-text>
							<v-form>
								<v-text-field
									label="Correo Electrónico"
									required></v-text-field>
								<v-text-field
									label="Contraseña"
									required></v-text-field>
							</v-form>
						</v-card-text>
						<v-card-actions justify="end">
								<v-spacer></v-spacer>
								<v-btn  text large color="primary" @click="login">Login</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
			
		</v-container>
		
	</v-app>
</template>

<script>
export default {
  name: 'Login',
  data:()=>{
    return ({
    })
  },
  methods:{
  	login(){
  		this.$router.push('/hello');
  	}
  }
};
</script>
