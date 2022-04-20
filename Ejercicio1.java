
public class Main {
        public static int SumarLosTres(int a, int b, int c) {
            return a + b + c;
        }

        public int main() {
            Coche MiCoche = new Coche();
            MiCoche.AgregarPuertas();
            return MiCoche.NumeroDePuertas;
        };


        public static class Coche {
            public int NumeroDePuertas;
            public void AgregarPuertas(){
                this.NumeroDePuertas++;
            }
        }
}



