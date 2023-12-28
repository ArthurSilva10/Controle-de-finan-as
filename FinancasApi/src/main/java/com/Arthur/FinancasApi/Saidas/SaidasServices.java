package com.Arthur.FinancasApi.Saidas;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class SaidasServices
{
    @Autowired
    private SaidaRepository saidaRepository;

    public Iterable<Saida> listar()
    {
        return saidaRepository.findAll();
    }

    public ResponseEntity<Saida> cadastrar(Saida saida)
    {
        saidaRepository.save(saida);
        return new ResponseEntity<Saida>(saida, HttpStatus.CREATED);
    }

    public ResponseEntity<Saida> deleta(long id)
    {
        saidaRepository.deleteById(id);
        return new ResponseEntity<Saida>(HttpStatus.OK);
    }
}
