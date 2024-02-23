import React from 'react'

export const Ventas = () => {

    const styles = {
        th: 'border border-slate-100 bg-blue-500 text-white font-semibold px-2 py-2 text-sm md:text-base',
        tr: 'bg-white hover:bg-slate-300 transition-all duration-200',
        td: 'border-b border-zinc-200 px-1 text-sm md:text-base',
        input: 'focus-visible:outline-none border-2 border-s-0 border-sky-500 rounded-e grow px-2 text-end font-bold text-zinc-500',
    }

    return (
        <>
            <div className='w-full h-screen flex items-center justify-center bg-white'>
                <div className='w-full xl:w-[1200px] px-4 xl:px-0 mx-auto mt-16'>
                    <section className='flex flex-col justify-start items-center'>
                        <h2 className='font-semibold md:font-normal w-full bg-blue-500 text-white px-4 py-4 rounded-xl md:rounded-t-xl md:rounded-b-none text-xl text-center md:text-start md:text-2xl'>VENTAS</h2>
                        <p className='text-zinc-400 text-center py-4 w-full md:w-3/4 px-2 md:px-0 text-xs md:text-base'>El valor de ventas que se muestra en Información Fiscal proviene de Facturación Electrónica, y corresponde al total de sus transacciones; distribuya este valor en los caiselleros de acuerdo a su necesidad</p>
                        <div className='overflow-x-auto max-w-full w-full'>
                            <table className='border-collapse w-[1200px]'>
                                <thead>
                                    <tr>
                                        <th className={`${styles.th} text-start`}>RESUMEN DE VENTAS Y OTRAS OPERACIONES DEL PERÍODO QUE DECLARA</th>
                                        <th className={`${styles.th} text-center`}>VALOR BRUTO</th>
                                        <th className={`${styles.th} text-center`}>VALOR NETO<span className='block'>(VALOR BRUTO - N/C)</span></th>
                                        <th className={`${styles.th} text-center`}>IMPUESTO GENERADO</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className={`${styles.tr}`}>
                                        <td className={`${styles.td}`}>Ventas locales (excluye activos fijos) gravadas tarifa diferente de cero</td>
                                        <td className={`${styles.td}`}>
                                            <div className='flex justify-center items-stretch w-full'>
                                                <span className='bg-sky-500 text-white px-1'>401</span>
                                                <label htmlFor="ventasLocales" className='hidden'>Valor Bruto de Ventas locales</label>
                                                <input type="number" step="0.01" min="0" name='ventasLocales' className={`${styles.input}`}/>
                                            </div>
                                        </td>
                                        <td className={`${styles.td}`}>
                                            <div className='flex justify-center items-stretch w-full'>
                                                <span className='bg-sky-500 text-white px-1'>411</span>
                                                <label htmlFor="ventasLocales" className='hidden'>Valor Neto Ventas de locales</label>
                                                <input type="number" step="0.01" min="0" name='ventasLocales' className={`${styles.input}`}/>
                                            </div>
                                        </td>
                                        <td className={`${styles.td}`}>
                                            <div className='flex justify-center items-stretch w-full'>
                                                <span className='bg-sky-500 text-white px-1'>421</span>
                                                <label htmlFor="ventasLocales" className='hidden'>Impuesto generado de Ventas locales</label>
                                                <input type="number" step="0.01" min="0" name='ventasLocales' className={`${styles.input}`}/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className={`${styles.tr}`}>
                                        <td className={`${styles.td}`}>IVA generado en la diferencia entre ventas y ntoas de crédito con distinta tarifa (ajuste a pagar)</td>
                                        <td></td>
                                        <td></td>
                                        <td className={`${styles.td}`}>
                                            <div className='flex justify-center items-stretch w-full'>
                                                <span className='bg-sky-500 text-white px-1'>423</span>
                                                <label htmlFor="ventasLocales" className='hidden'>Impuesto generado de IVA generado en la diferencia entre ventas y ntoas de crédito con distinta tarifa (ajuste a pagar)</label>
                                                <input type="number" step="0.01" min="0" name='ventasLocales' className={`${styles.input}`}/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className={`${styles.tr}`}>
                                        <td className={`${styles.td}`}>IVA generado en la diferencia entre ventas y ntoas de crédito con distinta tarifa (ajuste a favor)</td>
                                        <td></td>
                                        <td></td>
                                        <td className={`${styles.td}`}>
                                            <div className='flex justify-center items-stretch w-full'>
                                                <span className='bg-sky-500 text-white px-1'>424</span>
                                                <label htmlFor="ventasLocales" className='hidden'>Impuesto generado de IVA generado en la diferencia entre ventas y ntoas de crédito con distinta tarifa (ajuste a favor)</label>
                                                <input type="number" step="0.01" min="0" name='ventasLocales' className={`${styles.input}`}/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className={`${styles.tr}`}>
                                        <td className={`${styles.td}`}>Ventas locales (excluye activos fijos) gravadas tarifa 0% que no dan derecho a crédito tributario</td>
                                        <td className={`${styles.td}`}>
                                            <div className='flex justify-center items-stretch w-full'>
                                                <span className='bg-sky-500 text-white px-1'>403</span>
                                                <label htmlFor="ventasLocales" className='hidden'>Valor Bruto de Ventas locales (excluye activos fijos) gravadas tarifa 0% que no dan derecho a crédito tributario</label>
                                                <input type="number" step="0.01" min="0" name='ventasLocales' className={`${styles.input}`}/>
                                            </div>
                                        </td>
                                        <td className={`${styles.td}`}>
                                            <div className='flex justify-center items-stretch w-full'>
                                                <span className='bg-sky-500 text-white px-1'>413</span>
                                                <label htmlFor="ventasLocales" className='hidden'>Valor Neto Ventas locales (excluye activos fijos) gravadas tarifa 0% que no dan derecho a crédito tributario</label>
                                                <input type="number" step="0.01" min="0" name='ventasLocales' className={`${styles.input}`}/>
                                            </div>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr className={`${styles.tr}`}>
                                        <td className={`${styles.td}`}>Ventas locales (excluye activos fijos) gravadas tarifa 0% que dan derecho a crédito tributario</td>
                                        <td className={`${styles.td}`}>
                                            <div className='flex justify-center items-stretch w-full'>
                                                <span className='bg-sky-500 text-white px-1'>405</span>
                                                <label htmlFor="ventasLocales" className='hidden'>Valor Bruto de Ventas locales (excluye activos fijos) gravadas tarifa 0% que dan derecho a crédito tributario</label>
                                                <input type="number" step="0.01" min="0" name='ventasLocales' className={`${styles.input}`}/>
                                            </div>
                                        </td>
                                        <td className={`${styles.td}`}>
                                            <div className='flex justify-center items-stretch w-full'>
                                                <span className='bg-sky-500 text-white px-1'>415</span>
                                                <label htmlFor="ventasLocales" className='hidden'>Valor Neto Ventas locales (excluye activos fijos) gravadas tarifa 0% que dan derecho a crédito tributario</label>
                                                <input type="number" step="0.01" min="0" name='ventasLocales' className={`${styles.input}`}/>
                                            </div>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr className={`${styles.tr}`}>
                                        <td className={`${styles.td}`}>Total ventas y otras operaciones</td>
                                        <td className={`${styles.td}`}>
                                            <div className='flex justify-center items-stretch w-full'>
                                                <span className='bg-sky-500 text-white px-1'>409</span>
                                                <label htmlFor="ventasLocales" className='hidden'>Valor Bruto de Total ventas y otras operaciones</label>
                                                <input type="number" step="0.01" min="0" name='ventasLocales' className={`${styles.input}`}/>
                                            </div>
                                        </td>
                                        <td className={`${styles.td}`}>
                                            <div className='flex justify-center items-stretch w-full'>
                                                <span className='bg-sky-500 text-white px-1'>419</span>
                                                <label htmlFor="ventasLocales" className='hidden'>Valor Neto Total ventas y otras operaciones</label>
                                                <input type="number" step="0.01" min="0" name='ventasLocales' className={`${styles.input}`}/>
                                            </div>
                                        </td>
                                        <td className={`${styles.td}`}>
                                            <div className='flex justify-center items-stretch w-full'>
                                                <span className='bg-sky-500 text-white px-1'>429</span>
                                                <label htmlFor="ventasLocales" className='hidden'>Impuesto generado de Total ventas y otras operaciones</label>
                                                <input type="number" step="0.01" min="0" name='ventasLocales' className={`${styles.input}`}/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className={`${styles.tr}`}>
                                        <td className={`${styles.td}`}>Transferencias no objeto o exentas de IVA</td>
                                        <td className={`${styles.td}`}>
                                            <div className='flex justify-center items-stretch w-full'>
                                                <span className='bg-sky-500 text-white px-1'>431</span>
                                                <label htmlFor="ventasLocales" className='hidden'>Valor Bruto de Total ventas y otras operaciones</label>
                                                <input type="number" step="0.01" min="0" name='ventasLocales' className={`${styles.input}`}/>
                                            </div>
                                        </td>
                                        <td className={`${styles.td}`}>
                                            <div className='flex justify-center items-stretch w-full'>
                                                <span className='bg-sky-500 text-white px-1'>441</span>
                                                <label htmlFor="ventasLocales" className='hidden'>Valor Neto Total ventas y otras operaciones</label>
                                                <input type="number" step="0.01" min="0" name='ventasLocales' className={`${styles.input}`}/>
                                            </div>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr className={`${styles.tr}`}>
                                        <td className={`${styles.td}`}>Ingreso por reembolso como intermediario / valores facturados por operadoras de transporte / ingresos obtenidos por parte de las sociedades de gestión colectiva como intermediarios (informativo)</td>
                                        <td className={`${styles.td}`}>
                                            <div className='flex justify-center items-stretch w-full'>
                                                <span className='bg-sky-500 text-white px-1'>434</span>
                                                <label htmlFor="ventasLocales" className='hidden'>Valor Bruto de Ingreso por reembolso como intermediario / valores facturados por operadoras de transporte / ingresos obtenidos por parte de las sociedades de gestión colectiva como intermediarios (informativo)</label>
                                                <input type="number" step="0.01" min="0" name='ventasLocales' className={`${styles.input}`}/>
                                            </div>
                                        </td>
                                        <td className={`${styles.td}`}>
                                            <div className='flex justify-center items-stretch w-full'>
                                                <span className='bg-sky-500 text-white px-1'>444</span>
                                                <label htmlFor="ventasLocales" className='hidden'>Valor Neto de Ingreso por reembolso como intermediario / valores facturados por operadoras de transporte / ingresos obtenidos por parte de las sociedades de gestión colectiva como intermediarios (informativo)</label>
                                                <input type="number" step="0.01" min="0" name='ventasLocales' className={`${styles.input}`}/>
                                            </div>
                                        </td>
                                        <td className={`${styles.td}`}>
                                            <div className='flex justify-center items-stretch w-full'>
                                                <span className='bg-sky-500 text-white px-1'>454</span>
                                                <label htmlFor="ventasLocales" className='hidden'>Impuesto generado de Ingreso por reembolso como intermediario / valores facturados por operadoras de transporte / ingresos obtenidos por parte de las sociedades de gestión colectiva como intermediarios (informativo)</label>
                                                <input type="number" step="0.01" min="0" name='ventasLocales' className={`${styles.input}`}/>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
