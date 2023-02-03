import * as Dialog from "@radix-ui/react-dialog";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { Reserva } from "../../../../@types/interfaces/reserva";
import "./styles.scss";

export default function ResumoReserva({ reserva }: { reserva: Reserva }) {
	return (
		<Dialog.Root>
			<Dialog.Trigger className="dialog__trigger">
				<span className="sr-only">Ver resumo da reserva</span>
				<BookmarkFilledIcon />
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className="dialog__overlay" />
				<Dialog.Content
					className="dialog__content"
					aria-describedby={undefined}
				>
					<Dialog.Title>Resumo da reserva</Dialog.Title>
					<div className="dialog__description">
						<h3>{reserva.quarto.nome}</h3>
            <figure className="img__container">
              <img
                src={reserva.quarto.imgUrl}
                alt=""
              />
              <figcaption>
                {reserva.quarto.descricao}
              </figcaption>
            </figure>
						<span>
							Check-in:{" "}
							<strong>
								{reserva.checkIn ? reserva.checkIn : ""}
							</strong>
						</span>
						<span>
							Check out:{" "}
							<strong>
								{reserva.checkOut ? reserva.checkOut : ""}
							</strong>
						</span>
						<span>
							Quantidade de pessoas:{" "}
							<strong>
								{reserva.quantidadeDePessoas
									? reserva.quantidadeDePessoas
									: ""}
							</strong>
						</span>
					</div>
          <ul>
            {reserva.servicosSelecionados.map((servico) => (
              <li key={servico.id}>{servico.nome}</li>
            ))}
          </ul>
					<Dialog.Close>Fechar</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
