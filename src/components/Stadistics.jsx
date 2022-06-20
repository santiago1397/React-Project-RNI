import React from 'react'
import Chart from 'react-apexcharts'
import { Stats, SChartL, SChartR } from './Stadistics-style'

export default function Stadistics(innovators) {
  console.log(innovators.innovators)

  const state = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  for( var i = 0; i< innovators.innovators.length; i++){
    switch (innovators.innovators[i].estado){
      case 'Amazonas':
        state[0] += 1;
        break
      case 'Anzoátegui':
        state[1] += 1;
        break
      case 'Apure':
        state[2] += 1;
        break
      case 'Aragua':
        state[3] += 1;
        break
      case 'Barinas':
        state[4] += 1;
        break
      case 'Bolívar':
        state[5] += 1;
        break
      case 'Carabobo':
        state[6] += 1;
        break
      case 'Cojedes':
        state[7] += 1;
        break
      case 'Delta Amacuro':
        state[8] += 1;
        break
      case 'Distrito Capital':
        state[9] += 1;
        break
      case 'Falcón':
        state[10] += 1;
        break
      case 'Guárico':
        state[11] += 1;
        break
      case 'Lara':
        state[12] += 1;
        break
      case 'Mérida':
        state[13] += 1;
        break
      case 'Miranda':
        state[14] += 1;
        break
      case 'Monagas':
        state[15] += 1;
        break
      case 'Nueva Esparta':
        state[16] += 1;
        break
      case 'Portuguesa':
        state[17] += 1;
        break
      case 'Sucre':
        state[18] += 1;
        break
      case 'Táchira':
        state[19] += 1;
        break
      case 'Trujillo':
        state[20] += 1;
        break
      case 'Vargas':
        state[21] += 1;
        break
      case 'Yaracuy':
        state[22] += 1;
        break
      case 'Zulia':
        state[23] += 1;
        break
      default:
        break
    }
  }


  const aux = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  for(i = 0; i< innovators.innovators.length; i++){
    switch (innovators.innovators[i].motor){
      case 'Agroalimentario':
        aux[0] += 1;
        break
      case 'Farmacéutico':
        aux[1] += 1;
        break
      case 'Industrial':
        aux[2] += 1;
        break
      case 'Exportador':
        aux[3] += 1;
        break
      case 'Economía Comunal, Social y Socialista':
        aux[4] += 1;
        break
      case 'Hidrocarburos':
        aux[5] += 1;
        break
      case 'Petroquímico':
        aux[6] += 1;
        break
      case 'Minero':
        aux[7] += 1;
        break
      case 'Turismo':
        aux[8] += 1;
        break
      case 'Construcción':
        aux[9] += 1;
        break
      case 'Forestal':
        aux[10] += 1;
        break
      case 'Industrial Militar':
        aux[11] += 1;
        break
      case 'Telecomunicaciones e Informática':
        aux[12] += 1;
        break
      case 'Banca y Finanzas':
        aux[13] += 1;
        break
      case 'Industrias Básicas, Estratégicas y Socialistas':
        aux[14] += 1;
        break
      case 'Criptomoneda petro':
        aux[15] += 1;
        break
      case 'Automotriz':
        aux[16] += 1;
        break
      case 'Emprendedores y emprendedoras':
        aux[17] += 1;
        break
      default:
        break
    }
  }
  

  return (
    <Stats >

      <div className='top-section' >

        <SChartL>
          <h3 >Innovadores por motor</h3>
          <Chart
            type="pie"

            series={aux}

            options={{
              responsive: [{
                breakpoint: 3000,
                options: {
                  chart: {
                    width: 450,
                    height: '100%',
                    animations: {
                      enabled: false
                    },
                    markers: {
                      size: 0,
                    },
                  },
                  legend: {
                    position: 'right'
                  }

                },
              },
              {
                breakpoint: 1000,
                options: {
                  chart: {
                    width: 350,
                    height: '100%',
                    animations: {
                      enabled: false
                    },
                    markers: {
                      size: 0,
                    },
                  },
                  legend: {
                    position: 'right'
                  }

                },
              },
              {
                breakpoint: 885,
                options: {
                  chart: {
                    width: '100%',
                    height: '100%',
                    animations: {
                      enabled: false
                    },
                  },
                  legend: {
                    position: 'bottom'
                  }

                },
              },
              {
                breakpoint: 500,
                options: {
                  chart: {
                    width: 250,
                    height: '100%',
                    animations: {
                      enabled: false
                    },
                  },
                  legend: {
                    position: 'bottom'
                  }

                },
              }],


              chart: {
                height: '100%',
                type: 'bar',
                animations: {
                  enabled: false
                },
                markers: {
                  size: 0
                },
                toolbar: {
                  offsetX: 0,
                  offsetY: 0,
                  show: true,
                  tools: {
                    download: true
                  },

                }
              },
              legend: {
                position: 'left'
              },
              dataLabels: {
                enabled: true
              },

              labels: ['Agroalimentario', 'Farmacéutico', 'Industrial', 'Exportador', 'Economía C, S y S', 'Hidrocarburos', 'Petroquímico',
               'Minero', 'Turismo', 'Construcción', 'Forestal', 'Industrial Militar',
                'Telecomunicaciones/Informática', 'Banca y Finanzas', 'Industrias B, E y S'
                ,'Criptomoneda petro', 'Automotriz','Emprendedores']

            }}
          />
        </SChartL>

        <SChartR>
          <h3>Proporcion de innovadores M/F</h3>
          <Chart
            type="donut"

            series={[6578,67872]}

            options={{
              responsive: [{
                breakpoint: 3000,
                options: {
                  chart: {
                    width: 320,
                    animations: {
                      enabled: false
                    },
                    markers: {
                      size: 0,
                    }
                  },
                  legend: {
                    position: 'left'
                  }

                },
              },
              {
                breakpoint: 885,
                options: {
                  chart: {
                    width: 280,
                    animations: {
                      enabled: false
                    },
                    markers: {
                      size: 0,
                    }
                  }

                },
              },
              {
                breakpoint: 700,
                options: {
                  chart: {
                    width: 300,
                    animations: {
                      enabled: false
                    },
                    markers: {
                      size: 0,
                    }
                  }

                },
              },
              {
                breakpoint: 500,
                options: {
                  chart: {
                    width: '100%',
                    animations: {
                      enabled: false
                    },
                    markers: {
                      size: 0,
                    }
                  },
                  legend: {
                    position: 'bottom'
                  }

                },
              }
              ],

              chart: {
                type: 'donut',
                toolbar: {
                  offsetX: 0,
                  offsetY: 0,
                  show: true,
                  tools: {
                    download: true
                  },

                }
              },
              legend: {
                position: 'left'
              },
              dataLabels: {
                enabled: true
              },

              labels: ['hombres', 'mujeres']

            }}
          />
        </SChartR>
      </div>

      <div className='bottom-section'>
        <h3>Innovadores por estado</h3>
        <Chart
          type="bar"
          series={[{
            data: state
          }]}

          options={{
            responsive: [{
              breakpoint: 3000,
              options: {
                chart: {
                  height: 200,
                  animations: {
                    enabled: false
                  },
                  markers: {
                    size: 0,
                  }
                },
                plotOptions: {
                  bar: {
                    horizontal: false,
                  }
                },
                xaxis: {
                  labels: {
                    rotate: -45,
                    rotateAlways: true,
                  },
                  categories: ['Amazonas', 'Anzoátegui', 'Apure', 'Aragua', 'Barinas', 'Bolívar',
                    'Carabobo', 'Cojedes', 'Delta Amacuro', 'Distrito Capital', 'Falcón', 'Guárico', 'Lara', 'Mérida'
                    , 'Miranda', 'Monagas', 'Nueva Esparta', 'Portuguesa', 'Sucre', 'Táchira', 'Trujillo', 'Vargas', 'Yaracuy', 'Zulia'
                  ],
                },
              },
            }],
            chart: {
              height: '100%',
              type: 'bar',
              toolbar: {
                offsetX: 0,
                offsetY: 0,
                show: true,
                tools: {
                  download: true,
                  zoom: false,
                  zoomin: false,
                  zoomout: false,
                  pan: false,
                  reset: false,
                },

              }
            },
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '50%',
                horizontal: false,
              }
            },
            dataLabels: {
              enabled: false
            },

            xaxis: {
              labels: {
                rotate: 45,
              },
              categories: ['Amazonas', 'Anzoátegui', 'Apure', 'Aragua', 'Barinas', 'Bolívar',
                    'Carabobo', 'Cojedes', 'Delta Amacuro', 'Distrito Capital', 'Falcón', 'Guárico', 'Lara', 'Mérida'
                    , 'Miranda', 'Monagas', 'Nueva Esparta', 'Portuguesa', 'Sucre', 'Táchira', 'Trujillo', 'Vargas', 'Yaracuy', 'Zulia'
                  ],
              tickPlacement: 'on'
            },
            yaxis: {
            },

          }}
        />
      </div>
      <div className='aux-bottom-section'>
        <h3>Innovadores por estado</h3>
        <Chart
          type='bar'
          series={[{
            data: state
          }]}
          options={
            {
              responsive: [{
                breakpoint: 3000,
                options: {
                  chart: {
                    width: '100%',
                    height: '100%',
                    animations: {
                      enabled: false
                    },
                    markers: {
                      size: 0,
                    }
                  },
                  plotOptions: {
                    bar: {
                      horizontal: true,
                    }
                  },
                  xaxis: {
                    labels: {
                      rotate: -45,
                      rotateAlways: true,
                    },
                    categories: ['Amazonas', 'Anzoátegui', 'Apure', 'Aragua', 'Barinas', 'Bolívar',
                    'Carabobo', 'Cojedes', 'Delta Amacuro', 'Distrito Capital', 'Falcón', 'Guárico', 'Lara', 'Mérida'
                    , 'Miranda', 'Monagas', 'Nueva Esparta', 'Portuguesa', 'Sucre', 'Táchira', 'Trujillo', 'Vargas', 'Yaracuy', 'Zulia'
                  ],
                  },
                },
              }],
              chart: {
                height: 1000,
              },
              plotOptions: {
                bar: {
                  borderRadius: 4,
                  horizontal: true,
                }
              },
              dataLabels: {
                enabled: false
              },
              xaxis: {
                categories: ['Amazonas', 'Anzoátegui', 'Apure', 'Aragua', 'Barinas', 'Bolívar',
                    'Carabobo', 'Cojedes', 'Delta Amacuro', 'Distrito Capital', 'Falcón', 'Guárico', 'Lara', 'Mérida'
                    , 'Miranda', 'Monagas', 'Nueva Esparta', 'Portuguesa', 'Sucre', 'Táchira', 'Trujillo', 'Vargas', 'Yaracuy', 'Zulia'
                  ],
              }
            }}

        />
      </div>

    </Stats>
  )
}
