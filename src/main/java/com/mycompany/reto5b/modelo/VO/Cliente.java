/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.reto5b.modelo.VO;

/**
 *
 * @author ING. EDWIN SANCHEZ
 */
public class Cliente {
    
    private int id_compra;
    private String constructora;
    private String banco;

    public Cliente() {
    }

    public Cliente(int id_compra, String Constructora, String Banco) {
        this.id_compra = id_compra;
        this.constructora = Constructora;
        this.banco = Banco;
    }

    public int getId_compra() {
        return id_compra;
    }

    public void setId_compra(int id_compra) {
        this.id_compra = id_compra;
    }

    public String getConstructora() {
        return constructora;
    }

    public void setConstructora(String Constructora) {
        this.constructora = Constructora;
    }

    public String getBanco() {
        return banco;
    }

    public void setBanco(String Banco) {
        this.banco = Banco;
    }

    @Override
    public String toString() {
        return "Cliente{" + "id_compra=" + id_compra + ", Constructora=" + constructora + ", Banco=" + banco + '}';
    }

    
    
    
}
