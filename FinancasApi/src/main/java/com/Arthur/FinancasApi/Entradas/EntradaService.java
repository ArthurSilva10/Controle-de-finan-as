package com.Arthur.FinancasApi.Entradas;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class EntradaService
{
    @Autowired
    private EntradaRepository entradaRepository;

    public Iterable<Entrada> listar()
    {
        return entradaRepository.findAll();
    }

    public ResponseEntity<Entrada> cadastrar(Entrada entrada)
    {
        entradaRepository.save(entrada);
        return new ResponseEntity<Entrada>(entrada, HttpStatus.CREATED);
    }
}
