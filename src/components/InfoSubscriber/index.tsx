
function InfoSubscriber({ isSubscriber }: any) {
  return (
    <div>
      {isSubscriber && 
        <p>Há um bônus adicional de 30% e um desconto de5% adicional para assinantes!</p>
      }
    </div>
  );
}

export default InfoSubscriber;
