import styled from "styled-components";

export const Container = styled.div`
    width: 87.5rem;
    height: 48.4375rem;

    strong {
        text-align: center;
        margin: auto 0;
    }

    background-color: gray;
    grid-gap: 5px;

    display: grid;
    grid-template-columns: calc((1fr) * 8);
    grid-template-rows: calc((1fr) * 25);
    grid-template-areas: 
    'horario diaSegunda diaTerca diaQuata diaQuinta diaSexta diaSabado diaDomingo'
    'horario segunda terca quarta quinta sexta sabado domingo'
    'seis seis-segunda seis-terca seis-quarta seis-quinta seis-sexta seis-sabado seis-domingo'
    'seisMeia seisMeia-segunda seisMeia-terca seisMeia-quarta seisMeia-quinta seisMeia-sexta seisMeia-sabado seisMeia-domingo'
    'sete sete-segunda sete-terca sete-quarta sete-quinta sete-sexta sete-sabado sete-domingo'
    'seteMeia seteMeia-segunda seteMeia-terca seteMeia-quarta seteMeia-quinta seteMeia-sexta seteMeia-sabado seteMeia-domingo'
    'oito oito-segunda oito-terca oito-quarta oito-quinta oito-sexta oito-sabado oito-domingo'
    'oitoMeia oitoMeia-segunda oitoMeia-terca oitoMeia-quarta oitoMeia-quinta oitoMeia-sexta oitoMeia-sabado oitoMeia-domingo'
    'nove nove-segunda nove-terca nove-quarta nove-quinta nove-sexta nove-sabado nove-domingo'
    'noveMeia noveMeia-segunda noveMeia-terca noveMeia-quarta noveMeia-quinta noveMeia-sexta noveMeia-sabado noveMeia-domingo'
    'dez dez-segunda dez-terca dez-quarta dez-quinta dez-sexta dez-sabado dez-domingo'
    'dezMeia dezMeia-segunda dezMeia-terca dezMeia-quarta dezMeia-quinta dezMeia-sexta dezMeia-sabado dezMeia-domingo'
    'onze onze-segunda onze-terca onze-quarta onze-quinta onze-sexta onze-sabado onze-domingo'
    'onzeMeia onzeMeia-segunda onzeMeia-terca onzeMeia-quarta onzeMeia-quinta onzeMeia-sexta onzeMeia-sabado onzeMeia-domingo'
    'doze doze-segunda doze-terca doze-quarta doze-quinta doze-sexta doze-sabado doze-domingo'
    'dozeMeia dozeMeia-segunda dozeMeia-terca dozeMeia-quarta dozeMeia-quinta dozeMeia-sexta dozeMeia-sabado dozeMeia-domingo'
    'treze treze-segunda treze-terca treze-quarta treze-quinta treze-sexta treze-sabado treze-domingo'
    'trezeMeia trezeMeia-segunda trezeMeia-terca trezeMeia-quarta trezeMeia-quinta trezeMeia-sexta trezeMeia-sabado trezeMeia-domingo'
    'quatorze quatorze-segunda quatorze-terca quatorze-quarta quatorze-quinta quatorze-sexta quatorze-sabado quatorze-domingo'
    'quatorzeMeia quatorzeMeia-segunda quatorzeMeia-terca quatorzeMeia-quarta quatorzeMeia-quinta quatorzeMeia-sexta quatorzeMeia-sabado quatorzeMeia-domingo'
    'quinze quinze-segunda quinze-terca quinze-quarta quinze-quinta quinze-sexta quinze-sabado quinze-domingo'
    'quinzeMeia quinzeMeia-segunda quinzeMeia-terca quinzeMeia-quarta quinzeMeia-quinta quinzeMeia-sexta quinzeMeia-sabado quinzeMeia-domingo'
    'dezesseis dezesseis-segunda dezesseis-terca dezesseis-quarta dezesseis-quinta dezesseis-sexta dezesseis-sabado dezesseis-domingo'
    'dezesseisMeia dezesseisMeia-segunda dezesseisMeia-terca dezesseisMeia-quarta dezesseisMeia-quinta dezesseisMeia-sexta dezesseisMeia-sabado dezesseisMeia-domingo'
    'dezessete dezessete-segunda dezessete-terca dezessete-quarta dezessete-quinta dezessete-sexta dezessete-sabado dezessete-domingo'
    'dezesseteMeia dezesseteMeia-segunda dezesseteMeia-terca dezesseteMeia-quarta dezesseteMeia-quinta dezesseteMeia-sexta dezesseteMeia-sabado dezesseteMeia-domingo'
    'dezoito dezoito-segunda dezoito-terca dezoito-quarta dezoito-quinta dezoito-sexta dezoito-sabado dezoito-domingo';

    .horario {
        grid-area: horario;
    }

    .diaSegunda {
        grid-area: diaSegunda;
    }

    .diaTerca {
        grid-area: diaTerca;
    }

    .diaQuarta {
        grid-area: diaQuata;
    }
    
    .diaQuinta {
        grid-area: diaQuinta;
    }

    .diaSexta {
        grid-area: diaSexta;
    }

    .diaSabado {
        grid-area: diaSabado;
    }

    .diaDomingo {
        grid-area: diaDomingo;
    }

    .segunda {
        grid-area: segunda;
    }

    .terca {
        grid-area: terca;
    }

    .quarta {
        grid-area: quarta;
    }

    .quinta {
        grid-area: quinta;
    } 
    
    .sexta {
        grid-area: sexta;
    }

    .sabado {
        grid-area: sabado;
    }

    .domingo {
        grid-area: domingo;
    }

    .seis {
        grid-area: seis;
    }

    .seis-segunda {
    grid-area: seis-segunda;
}

    .seis-terca {
        grid-area: seis-terca;
    }

    .seis-quarta {
        grid-area: seis-quarta;
    }

    .seis-quinta {
        grid-area: seis-quinta;
    }

    .seis-sexta {
        grid-area: seis-sexta;
    }

    .seis-sabado {
        grid-area: seis-sabado;
    }

    .seis-domingo {
        grid-area: seis-domingo;
    }

    .seisMeia {
        grid-area: seisMeia;
    }

    .seisMeia-segunda {
        grid-area: seisMeia-segunda;
    }

    .seisMeia-terca {
        grid-area: seisMeia-terca;
    }

    .seisMeia-quarta {
        grid-area: seisMeia-quarta;
    }

    .seisMeia-quinta {
        grid-area: seisMeia-quinta;
    }

    .seisMeia-sexta {
        grid-area: seisMeia-sexta;
    }

    .seisMeia-sabado {
        grid-area: seisMeia-sabado;
    }

    .seisMeia-domingo {
        grid-area: seisMeia-domingo;
    }

    .sete {
        grid-area: sete;
    }

    .sete-segunda {
        grid-area: sete-segunda;
    }

    .sete-terca {
        grid-area: sete-terca;
    }

    .sete-quarta {
        grid-area: sete-quarta;
    }

    .sete-quinta {
        grid-area: sete-quinta;
    }

    .sete-sexta {
        grid-area: sete-sexta;
    }

    .sete-sabado {
        grid-area: sete-sabado;
    }

    .sete-domingo {
        grid-area: sete-domingo;
    }

    .seteMeia {
        grid-area: seteMeia;
    }

    .seteMeia-segunda {
        grid-area: seteMeia-segunda;
    }

    .seteMeia-terca {
        grid-area: seteMeia-terca;
    }

    .seteMeia-quarta {
        grid-area: seteMeia-quarta;
    }

    .seteMeia-quinta {
        grid-area: seteMeia-quinta;
    }

    .seteMeia-sexta {
        grid-area: seteMeia-sexta;
    }

    .seteMeia-sabado {
        grid-area: seteMeia-sabado;
    }

    .seteMeia-domingo {
        grid-area: seteMeia-domingo;
    }

    .oito {
        grid-area: oito;
    }

    .oito-segunda {
        grid-area: oito-segunda;
    }

    .oito-terca {
        grid-area: oito-terca;
    }

    .oito-quarta {
        grid-area: oito-quarta;
    }

    .oito-quinta {
        grid-area: oito-quinta;
    }

    .oito-sexta {
        grid-area: oito-sexta;
    }

    .oito-sabado {
        grid-area: oito-sabado;
    }

    .oito-domingo {
        grid-area: oito-domingo;
    }

    .oitoMeia {
        grid-area: oitoMeia;
    }

    .oitoMeia-segunda {
        grid-area: oitoMeia-segunda;
    }

    .oitoMeia-terca {
        grid-area: oitoMeia-terca;
    }

    .oitoMeia-quarta {
        grid-area: oitoMeia-quarta;
    }

    .oitoMeia-quinta {
        grid-area: oitoMeia-quinta;
    }

    .oitoMeia-sexta {
        grid-area: oitoMeia-sexta;
    }

    .oitoMeia-sabado {
        grid-area: oitoMeia-sabado;
    }

    .oitoMeia-domingo {
        grid-area: oitoMeia-domingo;
    }

    .nove {
        grid-area: nove;
    }

    .nove-segunda {
        grid-area: nove-segunda;
    }

    .nove-terca {
        grid-area: nove-terca;
    }

    .nove-quarta {
        grid-area: nove-quarta;
    }

    .nove-quinta {
        grid-area: nove-quinta;
    }

    .nove-sexta {
        grid-area: nove-sexta;
    }

    .nove-sabado {
        grid-area: nove-sabado;
    }

    .nove-domingo {
        grid-area: nove-domingo;
    }

    .noveMeia {
        grid-area: noveMeia;
    }

    .noveMeia-segunda {
        grid-area: noveMeia-segunda;
    }

    .noveMeia-terca {
        grid-area: noveMeia-terca;
    }

    .noveMeia-quarta {
        grid-area: noveMeia-quarta;
    }

    .noveMeia-quinta {
        grid-area: noveMeia-quinta;
    }

    .noveMeia-sexta {
        grid-area: noveMeia-sexta;
    }

    .noveMeia-sabado {
        grid-area: noveMeia-sabado;
    }

    .noveMeia-domingo {
        grid-area: noveMeia-domingo;
    }

    .dez {
        grid-area: dez;
    }

    .dez-segunda {
        grid-area: dez-segunda;
    }

    .dez-terca {
        grid-area: dez-terca;
    }

    .dez-quarta {
        grid-area: dez-quarta;
    }

    .dez-quinta {
        grid-area: dez-quinta;
    }

    .dez-sexta {
        grid-area: dez-sexta;
    }

    .dez-sabado {
        grid-area: dez-sabado;
    }

    .dez-domingo {
        grid-area: dez-domingo;
    }

    .dezMeia {
        grid-area: dezMeia;
    }

    .dezMeia-segunda {
        grid-area: dezMeia-segunda;
    }

    .dezMeia-terca {
        grid-area: dezMeia-terca;
    }

    .dezMeia-quarta {
        grid-area: dezMeia-quarta;
    }

    .dezMeia-quinta {
        grid-area: dezMeia-quinta;
    }

    .dezMeia-sexta {
        grid-area: dezMeia-sexta;
    }

    .dezMeia-sabado {
        grid-area: dezMeia-sabado;
    }

    .dezMeia-domingo {
        grid-area: dezMeia-domingo;
    }

    .onze {
        grid-area: onze;
    }

    .onze-segunda {
        grid-area: onze-segunda;
    }

    .onze-terca {
        grid-area: onze-terca;
    }

    .onze-quarta {
        grid-area: onze-quarta;
    }

    .onze-quinta {
        grid-area: onze-quinta;
    }

    .onze-sexta {
        grid-area: onze-sexta;
    }

    .onze-sabado {
        grid-area: onze-sabado;
    }

    .onze-domingo {
        grid-area: onze-domingo;
    }

    .onzeMeia {
        grid-area: onzeMeia;
    }

    .onzeMeia-segunda {
        grid-area: onzeMeia-segunda;
    }

    .onzeMeia-terca {
        grid-area: onzeMeia-terca;
    }

    .onzeMeia-quarta {
        grid-area: onzeMeia-quarta;
    }

    .onzeMeia-quinta {
        grid-area: onzeMeia-quinta;
    }

    .onzeMeia-sexta {
        grid-area: onzeMeia-sexta;
    }

    .onzeMeia-sabado {
        grid-area: onzeMeia-sabado;
    }

    .onzeMeia-domingo {
        grid-area: onzeMeia-domingo;
    }

    .doze {
        grid-area: doze;
    }

    .doze-segunda {
        grid-area: doze-segunda;
    }

    .doze-terca {
        grid-area: doze-terca;
    }

    .doze-quarta {
        grid-area: doze-quarta;
    }

    .doze-quinta {
        grid-area: doze-quinta;
    }

    .doze-sexta {
        grid-area: doze-sexta;
    }

    .doze-sabado {
        grid-area: doze-sabado;
    }

    .doze-domingo {
        grid-area: doze-domingo;
    }

    .dozeMeia {
        grid-area: dozeMeia;
    }

    .dozeMeia-segunda {
        grid-area: dozeMeia-segunda;
    }

    .dozeMeia-terca {
        grid-area: dozeMeia-terca;
    }

    .dozeMeia-quarta {
        grid-area: dozeMeia-quarta;
    }

    .dozeMeia-quinta {
        grid-area: dozeMeia-quinta;
    }

    .dozeMeia-sexta {
        grid-area: dozeMeia-sexta;
    }

    .dozeMeia-sabado {
        grid-area: dozeMeia-sabado;
    }

    .dozeMeia-domingo {
        grid-area: dozeMeia-domingo;
    }

    .treze {
        grid-area: treze;
    }

    .treze-segunda {
        grid-area: treze-segunda;
    }

    .treze-terca {
        grid-area: treze-terca;
    }

    .treze-quarta {
        grid-area: treze-quarta;
    }

    .treze-quinta {
        grid-area: treze-quinta;
    }

    .treze-sexta {
        grid-area: treze-sexta;
    }

    .treze-sabado {
        grid-area: treze-sabado;
    }

    .treze-domingo {
        grid-area: treze-domingo;
    }

    .trezeMeia {
        grid-area: trezeMeia;
    }

    .trezeMeia-segunda {
        grid-area: trezeMeia-segunda;
    }

    .trezeMeia-terca {
        grid-area: trezeMeia-terca;
    }

    .trezeMeia-quarta {
        grid-area: trezeMeia-quarta;
    }

    .trezeMeia-quinta {
        grid-area: trezeMeia-quinta;
    }

    .trezeMeia-sexta {
        grid-area: trezeMeia-sexta;
    }

    .trezeMeia-sabado {
        grid-area: trezeMeia-sabado;
    }

    .trezeMeia-domingo {
        grid-area: trezeMeia-domingo;
    }

    .quatorze {
        grid-area: quatorze;
    }

    .quatorze-segunda {
        grid-area: quatorze-segunda;
    }

    .quatorze-terca {
        grid-area: quatorze-terca;
    }

    .quatorze-quarta {
        grid-area: quatorze-quarta;
    }

    .quatorze-quinta {
        grid-area: quatorze-quinta;
    }

    .quatorze-sexta {
        grid-area: quatorze-sexta;
    }

    .quatorze-sabado {
        grid-area: quatorze-sabado;
    }

    .quatorze-domingo {
        grid-area: quatorze-domingo;
    }

    .quatorzeMeia {
        grid-area: quatorzeMeia;
    }

    .quatorzeMeia-segunda {
        grid-area: quatorzeMeia-segunda;
    }

    .quatorzeMeia-terca {
        grid-area: quatorzeMeia-terca;
    }

    .quatorzeMeia-quarta {
        grid-area: quatorzeMeia-quarta;
    }

    .quatorzeMeia-quinta {
        grid-area: quatorzeMeia-quinta;
    }

    .quatorzeMeia-sexta {
        grid-area: quatorzeMeia-sexta;
    }

    .quatorzeMeia-sabado {
        grid-area: quatorzeMeia-sabado;
    }

    .quatorzeMeia-domingo {
        grid-area: quatorzeMeia-domingo;
    }

    .quinze {
        grid-area: quinze;
    }

    .quinze-segunda {
        grid-area: quinze-segunda;
    }

    .quinze-terca {
        grid-area: quinze-terca;
    }

    .quinze-quarta {
        grid-area: quinze-quarta;
    }

    .quinze-quinta {
        grid-area: quinze-quinta;
    }

    .quinze-sexta {
        grid-area: quinze-sexta;
    }

    .quinze-sabado {
        grid-area: quinze-sabado;
    }

    .quinze-domingo {
        grid-area: quinze-domingo;
    }

    .quinzeMeia {
        grid-area: quinzeMeia;
    }

    .quinzeMeia-segunda {
        grid-area: quinzeMeia-segunda;
    }

    .quinzeMeia-terca {
        grid-area: quinzeMeia-terca;
    }

    .quinzeMeia-quarta {
        grid-area: quinzeMeia-quarta;
    }

    .quinzeMeia-quinta {
        grid-area: quinzeMeia-quinta;
    }

    .quinzeMeia-sexta {
        grid-area: quinzeMeia-sexta;
    }

    .quinzeMeia-sabado {
        grid-area: quinzeMeia-sabado;
    }

    .quinzeMeia-domingo {
        grid-area: quinzeMeia-domingo;
    }
    .dezesseis {
    grid-area: dezesseis;
    }

    .dezesseis-segunda {
        grid-area: dezesseis-segunda;
    }

    .dezesseis-terca {
        grid-area: dezesseis-terca;
    }

    .dezesseis-quarta {
        grid-area: dezesseis-quarta;
    }

    .dezesseis-quinta {
        grid-area: dezesseis-quinta;
    }

    .dezesseis-sexta {
        grid-area: dezesseis-sexta;
    }

    .dezesseis-sabado {
        grid-area: dezesseis-sabado;
    }

    .dezesseis-domingo {
        grid-area: dezesseis-domingo;
    }

    .dezesseisMeia {
        grid-area: dezesseisMeia;
    }

    .dezesseisMeia-segunda {
        grid-area: dezesseisMeia-segunda;
    }

    .dezesseisMeia-terca {
        grid-area: dezesseisMeia-terca;
    }

    .dezesseisMeia-quarta {
        grid-area: dezesseisMeia-quarta;
    }

    .dezesseisMeia-quinta {
        grid-area: dezesseisMeia-quinta;
    }

    .dezesseisMeia-sexta {
        grid-area: dezesseisMeia-sexta;
    }

    .dezesseisMeia-sabado {
        grid-area: dezesseisMeia-sabado;
    }

    .dezesseisMeia-domingo {
        grid-area: dezesseisMeia-domingo;
    }

    .dezessete {
        grid-area: dezessete;
    }

    .dezessete-segunda {
        grid-area: dezessete-segunda;
    }

    .dezessete-terca {
        grid-area: dezessete-terca;
    }

    .dezessete-quarta {
        grid-area: dezessete-quarta;
    }

    .dezessete-quinta {
        grid-area: dezessete-quinta;
    }

    .dezessete-sexta {
        grid-area: dezessete-sexta;
    }

    .dezessete-sabado {
        grid-area: dezessete-sabado;
    }

    .dezessete-domingo {
        grid-area: dezessete-domingo;
    }

    .dezesseteMeia {
        grid-area: dezesseteMeia;
    }

    .dezesseteMeia-segunda {
        grid-area: dezesseteMeia-segunda;
    }

    .dezesseteMeia-terca {
        grid-area: dezesseteMeia-terca;
    }

    .dezesseteMeia-quarta {
        grid-area: dezesseteMeia-quarta;
    }

    .dezesseteMeia-quinta {
        grid-area: dezesseteMeia-quinta;
    }

    .dezesseteMeia-sexta {
        grid-area: dezesseteMeia-sexta;
    }

    .dezesseteMeia-sabado {
        grid-area: dezesseteMeia-sabado;
    }

    .dezesseteMeia-domingo {
        grid-area: dezesseteMeia-domingo;
    }

    .dezoito {
        grid-area: dezoito;
    }

    .dezoito-segunda {
        grid-area: dezoito-segunda;
    }

    .dezoito-terca {
        grid-area: dezoito-terca;
    }

    .dezoito-quarta {
        grid-area: dezoito-quarta;
    }

    .dezoito-quinta {
        grid-area: dezoito-quinta;
    }

    .dezoito-sexta {
        grid-area: dezoito-sexta;
    }

    .dezoito-sabado {
        grid-area: dezoito-sabado;
    }

    .dezoito-domingo {
        grid-area: dezoito-domingo;
    }

    .dezoitoMeia {
        grid-area: dezoitoMeia;
    }

    .dezoitoMeia-segunda {
        grid-area: dezoitoMeia-segunda;
    }

    .dezoitoMeia-terca {
        grid-area: dezoitoMeia-terca;
    }

    .dezoitoMeia-quarta {
        grid-area: dezoitoMeia-quarta;
    }

    .dezoitoMeia-quinta {
        grid-area: dezoitoMeia-quinta;
    }

    .dezoitoMeia-sexta {
        grid-area: dezoitoMeia-sexta;
    }

    .dezoitoMeia-sabado {
        grid-area: dezoitoMeia-sabado;
    }

    .dezoitoMeia-domingo {
        grid-area: dezoitoMeia-domingo;
    }


`