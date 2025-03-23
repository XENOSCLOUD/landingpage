import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | XENOS",
  description: "Impressum der XENOS GmbH",
};

export default function Impressum() {
  return (
    <div className="container mx-auto px-4 py-16 pt-32">
      <h1 className="text-3xl font-bold mb-8">Impressum</h1>
      
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
        <p>
          Noah Kellner<br />
          Billerstraße 6<br />
          c/o Waas<br />
          86154 Augsburg
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Kontakt</h2>
        <p>
          Telefon: <a href="tel:+4915128768606" className="text-primary hover:underline">+49 151 28768606</a><br />
          E-Mail: <a href="mailto:noah.kellner@xenoscloud.com" className="text-primary hover:underline">noah.kellner@xenoscloud.com</a>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>Noah Kellner</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Haftungsausschluss</h2>
        <p>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
        </p>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </p>
      </div>
    </div>
  );
} 