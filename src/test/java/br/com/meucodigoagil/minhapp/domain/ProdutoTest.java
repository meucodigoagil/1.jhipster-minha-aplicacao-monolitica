package br.com.meucodigoagil.minhapp.domain;

import static br.com.meucodigoagil.minhapp.domain.ProdutoTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import br.com.meucodigoagil.minhapp.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class ProdutoTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Produto.class);
        Produto produto1 = getProdutoSample1();
        Produto produto2 = new Produto();
        assertThat(produto1).isNotEqualTo(produto2);

        produto2.setId(produto1.getId());
        assertThat(produto1).isEqualTo(produto2);

        produto2 = getProdutoSample2();
        assertThat(produto1).isNotEqualTo(produto2);
    }
}
