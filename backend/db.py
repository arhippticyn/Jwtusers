import os
from dotenv import load_dotenv
from sqlalchemy import create_engine, String
from sqlalchemy.orm import sessionmaker, declarative_base, mapped_column, Mapped

load_dotenv()

DB_URL = os.getenv('DATABASE_URL')

engine = create_engine(DB_URL)

SessionLocal = sessionmaker(bind=engine)

Base = declarative_base()


class Users(Base):
    __tablename__ = 'users'

    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str] = mapped_column(String(50))
    email: Mapped[str] = mapped_column(String(200))
    password: Mapped[str | None] = mapped_column()
    provider: Mapped[str] = mapped_column(nullable=False)
    provider_id: Mapped[str] = mapped_column(nullable=False)


def get_db():
    db = SessionLocal()
    try: 
        yield db
    
    finally:
        db.close()