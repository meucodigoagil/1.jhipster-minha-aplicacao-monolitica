package br.com.meucodigoagil.minhapp.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

public class ProdutoTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static Produto getProdutoSample1() {
        return new Produto().id(1L).nome("nome1");
    }

    public static Produto getProdutoSample2() {
        return new Produto().id(2L).nome("nome2");
    }

    public static Produto getProdutoRandomSampleGenerator() {
        return new Produto().id(longCount.incrementAndGet()).nome(UUID.randomUUID().toString());
    }
}
